import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './NavigationBar.css';

class NavigationBar extends Component {
    logoClickHandler = () => { this.props.history.push('/'); }

    render() {
        return (
            <div className={styles.NavigationBar}>
                <span className={styles.Logo} onClick={this.logoClickHandler}>Pro-Organizer</span>
            </div>
        )
    }
}

export default withRouter(NavigationBar);
