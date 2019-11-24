import React, { Component } from 'react';

import styles from './BoardColumn.css';

import ColumnCards from './ColumnCards/ColumnCards';

class BoardColumn extends Component {
    render() {
        return (
            <div className={styles.BoardColumn}>
                <p className={styles.BoardColumnTitle}>{this.props.title || 'Column'}</p>
                <ColumnCards cardClicked={this.props.cardClicked} cardsData={this.props.columnData} />
                <div className={styles.AddCard} onClick={() => this.props.addCard(this.props.columnData[0].board_id)}>Add a card</div>
            </div>
        )
    }
}

export default BoardColumn;
