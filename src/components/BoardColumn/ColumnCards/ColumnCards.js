import React, { Component } from 'react';

import styles from './ColumnCards.css';

import ColumnCard from './ColumnCard/ColumnCard';

class ColumnCards extends Component {
    render() {
        return (
            <div className={styles.ColumnCards}>
                <ColumnCard cardClicked={this.props.cardClicked} />
                <ColumnCard cardClicked={this.props.cardClicked} />
                <ColumnCard cardClicked={this.props.cardClicked} />
            </div>
        )
    }
}

export default ColumnCards;
