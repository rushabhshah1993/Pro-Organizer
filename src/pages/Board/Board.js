import React, { Component } from 'react';
import styles from './Board.css';

import BoardColumn from './../../components/BoardColumn/BoardColumn';
import Modal from './../../common/Modal/Modal';
import CardInfo from './../../components/CardInfo/CardInfo';

import { boardData } from './../../data';

class Board extends Component {
    state = {
        showModal: false,
        selectedCardData: {}
    }

    cardClickHandler = (card_details) => {
        let cardData = boardData.boards[card_details.board_id].cards.filter(card => {
            return card.id === card_details.card_id;
        });
        let selectedCardData = {};
        let columnData = boardData.boards[card_details.board_id].columns.filter(column => {
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

    render() {
        let boardId = this.props.match.params.boardId;
        let dataOfBoard = boardData.boards[boardId];
        let columns = dataOfBoard.columns.map(column => {
            let columnData = dataOfBoard.cards.filter(card => {
                return card.column === column.id;
            })
            return <BoardColumn title={column.name} id={column.id} columnData={columnData} key={column.id} cardClicked={this.cardClickHandler} />
        })
        let cardInfo = Object.keys(this.state.selectedCardData).length > 0 ? <CardInfo data={this.state.selectedCardData} /> : null;

        return (
            <>
                <div className={styles.Board}>
                    {this.state.showModal ? <Modal content={cardInfo} close={this.closeModalHandler} /> : null}
                    <p className={styles.BoardTitle}>Board</p>
                    <div className={styles.ColumnsContainer}>
                        {columns}
                        <div className={styles.AddColumn}>Add a column</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Board;
