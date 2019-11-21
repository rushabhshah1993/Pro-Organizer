import React, { Component } from 'react';

import styles from './ColumnCards.css';

import ColumnCard from './ColumnCard/ColumnCard';

class ColumnCards extends Component {
    render() {
        let cards = this.props.cardsData.map(card => {
            return <ColumnCard cardClicked={this.props.cardClicked} data={card} key={card.id} />
        });
        return (
            <div className={styles.ColumnCards}>
                { cards }
            </div>
        )
    }
}

export default ColumnCards;
