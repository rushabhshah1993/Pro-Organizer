import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import boardStyles from './../Board/Board.css';
import styles from './Boards.css';

import { boardData } from './../../data';

class Boards extends Component {
    render() {
        let boards = boardData.allBoards.map(boards => {
            return (
                <Link to={`/board/${boards.id}`} key={boards.id}>
                    <div className={styles.BoardCard}>
                        {boards.name}
                    </div>
                </Link>
            )
        })

        return (
            <div>
                <p className={boardStyles.BoardTitle}>Boards</p>
                <div className={styles.Boards}>
                    <div className={styles.BoardCard}>Board</div>
                    <div className={styles.BoardCard}>Board</div>
                    <div className={styles.BoardCard}>Board</div>
                    {boards}
                </div>
            </div>
        )
    }
}

export default Boards;
