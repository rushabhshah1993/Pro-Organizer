import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Board.css';

import BoardColumn from './../../components/BoardColumn/BoardColumn';
import Modal from './../../common/Modal/Modal';
import CardInfo from './../../components/CardInfo/CardInfo';
import AddCard from './../../components/AddCard/AddCard';

class Board extends Component {
    state = {
        showModal: false,
        selectedCardData: {},
        showAddCardModal: false
    }

    cardClickHandler = (card_details) => {
        let boardData = this.props.location.state.boardData;
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

    addCardHandler = (event) => {
        this.setState({
            showAddCardModal: true
        })
    }

    render() {
        let dataOfBoard = this.props.location.state.boardData;
        let columns = dataOfBoard.columns.map(column => {
            let columnData = dataOfBoard.cards.filter(card => {
                return card.column === column.id;
            })
            return <BoardColumn title={column.name} id={column.id} columnData={columnData} key={column.id} cardClicked={this.cardClickHandler} addCard={this.addCardHandler} />
        })
        let cardInfo = Object.keys(this.state.selectedCardData).length > 0 ? <CardInfo data={this.state.selectedCardData} /> : null;

        return (
            <>
                <div className={styles.Board}>
                    {this.state.showModal ? <Modal content={cardInfo} close={this.closeModalHandler} /> : null}
                    {this.state.showAddCardModal ? <Modal content={<AddCard />} /> : null}
                    <p className={styles.BoardTitle}>{this.props.location.state.boardData.name} Board</p>
                    <div className={styles.ColumnsContainer}>
                        {columns}
                        <div className={styles.AddColumn}>Add a column</div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Board);
