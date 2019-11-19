import React, { Component } from 'react';
import boardStyles from './../Board/Board.css';
import styles from './Boards.css';

class Boards extends Component {
    render() {
        return (
            <div>
                <p className={boardStyles.BoardTitle}>Boards</p>
                <div className={styles.Boards}>
                    <div className={styles.BoardCard}>Board</div>
                    <div className={styles.BoardCard}>Board</div>
                    <div className={styles.BoardCard}>Board</div>
                </div>
            </div>
        )
    }
}

export default Boards;
