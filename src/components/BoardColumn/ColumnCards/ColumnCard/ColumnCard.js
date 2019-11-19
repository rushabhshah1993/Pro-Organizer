import React, { Component } from 'react';
import styles from './ColumnCard.css';

import Members from './../../../Members/Members';

class ColumnCard extends Component {
    render() {
        return (
            <div className={styles.ColumnCard} onClick={this.props.cardClicked}>
                <p className={styles.ColumnCardTitle}>ColumnCard</p>
                <div className={styles.ColumnCardFooter}>
                    <div className={styles.Icons}>
                        H
                    </div>
                    <Members member={'RS'} />
                </div>
            </div>
        )
    }
}

export default ColumnCard;
