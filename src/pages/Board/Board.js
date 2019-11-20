import React, { Component } from 'react';
import styles from './Board.css';

import BoardColumn from './../../components/BoardColumn/BoardColumn';
import Modal from './../../common/Modal/Modal';
import CardInfo from './../../components/CardInfo/CardInfo';

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
        return (
            <>
                <div className={styles.Board}>
                    {this.state.showModal ? <Modal content={<CardInfo />} close={this.closeModalHandler} /> : null}
                    <p className={styles.BoardTitle}>Board</p>
                    <div className={styles.ColumnsContainer}>
                        <BoardColumn cardClicked={this.cardClickHandler} />
                        <BoardColumn cardClicked={this.cardClickHandler} />
                        <BoardColumn cardClicked={this.cardClickHandler} />
                        <div className={styles.AddColumn}>Add a column</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Board;
