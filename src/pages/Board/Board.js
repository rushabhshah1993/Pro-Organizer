import React, { Component } from 'react';
import styles from './Board.css';

import BoardColumn from './../../components/BoardColumn/BoardColumn';
import Modal from './../../common/Modal/Modal';
import CardInfo from './../../components/CardInfo/CardInfo';

import { boardData } from './../../data';

class Board extends Component {
    state = {
        showModal: false
    }

    cardClickHandler = () => {
        this.setState({
            showModal: true
        })
    }
    
    closeModalHandler = () => {
        this.setState({
            showModal: false
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

        return (
            <>
                <div className={styles.Board}>
                    {this.state.showModal ? <Modal content={<CardInfo />} close={this.closeModalHandler} /> : null}
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
