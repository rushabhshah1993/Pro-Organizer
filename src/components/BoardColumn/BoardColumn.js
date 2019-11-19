import React, { Component } from 'react';

import styles from './BoardColumn.css';

import ColumnCards from './ColumnCards/ColumnCards';

class BoardColumn extends Component {
    render() {
        return (
            <div className={styles.BoardColumn}>
                <p className={styles.BoardColumnTitle}>Column 1</p>
                <ColumnCards cardClicked={this.props.cardClicked} />
            </div>
        )
    }
}

export default BoardColumn;
