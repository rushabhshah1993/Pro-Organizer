import React, { Component } from 'react';
import styles from './ColumnCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Members from './../../../Members/Members';

class ColumnCard extends Component {
    render() {
        let members = null;
        members = this.props.data.members && this.props.data.members.map(member => {
            return <Members member={member} key={member} />
        })

        return (
            <div className={styles.ColumnCard} onClick={this.props.cardClicked}>
                <p className={styles.ColumnCardTitle}>{this.props.data.title}</p>
                <div className={styles.ColumnCardFooter}>
                    {
                        this.props.data.description ?
                        <div className={styles.Icons}>
                            <FontAwesomeIcon icon='list' />
                        </div> :
                        <div></div>
                    }
                    <div className={styles.MembersContainer}>
                        {members}
                    </div>
                </div>
            </div>
        )
    }
}

export default ColumnCard;
