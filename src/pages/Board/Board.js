import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Board.css';

import BoardColumn from './../../components/BoardColumn/BoardColumn';
import Modal from './../../common/Modal/Modal';
import CardInfo from './../../components/CardInfo/CardInfo';
import AddCard from './../../components/AddCard/AddCard';
import Axios from 'axios';

class Board extends Component {
    state = {
        showModal: false,
        selectedCardData: {},
        showAddCardModal: false,
        addCardToColumnID: null,
        boardData: {}
    }

    componentDidMount() {
        let url = 'https://pro-organizer-f83b5.firebaseio.com/boardData/-LuM4blPg67eyvzgAzwn/boards/'+this.props.match.params.boardId+'.json';
        Axios.get(url)
            .then(response => {
                this.setState({
                    boardData: response.data
                })
            })
            .catch(error => {console.log(error)});
    }

    cardClickHandler = (card_details) => {
        let boardData = this.state.boardData;
        let cardData = boardData.cards.filter(card => {
            return card.id === card_details.card_id;
        });
        let selectedCardData = {};
        let columnData = boardData.columns.filter(column => {
            return column.id === cardData[0].column;
        })
        selectedCardData.card = cardData;
        selectedCardData.column = columnData;
        this.setState({
            selectedCardData: selectedCardData,
            showModal: true
        })
    }
    
    closeModalHandler = () => {
        this.setState({
            showModal: false,
            selectedCardData: {}
        })
    }

    closeAddCardModalHandler = () => {
        this.setState({
            showAddCardModal: false,
            addCardToColumnID: null
        })
    }

    addCardHandler = (column_id) => {
        this.setState({
            showAddCardModal: true,
            addCardToColumnID: column_id
        })
    }

    addCardToDBHandler = (values) => {
        values['due_date'] = values['due_date'] !== null ? new Date(values['due_date']).getTime() : null;
        values['board_id'] = this.state.boardData.id;
        values['column'] = this.state.addCardToColumnID;
        values['id'] = this.state.boardData.cards.splice(-1)[0].id + 1;

        let cards = this.state.boardData.cards;
        cards.push(values);
        let url = 'https://pro-organizer-f83b5.firebaseio.com/boardData/-LuM4blPg67eyvzgAzwn/boards/'+this.state.boardData.id+'/cards.json';
        Axios.put(url, cards)
            .then(response => {
                this.setState({
                    showAddCardModal: false,
                    addCardToColumnID: null,
                })
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    render() {
        let content = null;
        if(Object.keys(this.state.boardData).length > 0) {
            let dataOfBoard = this.state.boardData
            let columns = dataOfBoard.columns.map(column => {
                let columnData = dataOfBoard.cards.filter(card => {
                    return card.column === column.id;
                })
                return <BoardColumn title={column.name} id={column.id} columnData={columnData} key={column.id} cardClicked={this.cardClickHandler} addCard={this.addCardHandler} />
            })
            let cardInfo = Object.keys(this.state.selectedCardData).length > 0 ? <CardInfo data={this.state.selectedCardData} /> : null;

            content = (
                <>
                    {this.state.showModal ? <Modal content={cardInfo} close={this.closeModalHandler} /> : null}
                    {
                        this.state.showAddCardModal ?
                        <Modal 
                            content={
                                <AddCard members={this.state.boardData.members} addCard={this.addCardToDBHandler} />
                            } 
                            close={this.closeAddCardModalHandler} 
                        /> : 
                        null
                    }
                    <p className={styles.BoardTitle}>{this.state.boardData.name} Board</p>
                    <div className={styles.ColumnsContainer}>
                        {columns}
                        <div className={styles.AddColumn}>Add a column</div>
                    </div>
                </>
            )
        } else {
            content = <p>Loading...</p>;
        }
        return (
            <>
                <div className={styles.Board}>
                    {content}
                </div>
            </>
        )
    }
}

export default withRouter(Board);
