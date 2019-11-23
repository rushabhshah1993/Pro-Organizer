import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import boardStyles from './../Board/Board.css';
import styles from './Boards.css';

import { boardData } from './../../data';
import Axios from 'axios';

class Boards extends Component {
    state = {
        boardData: {},
        serverError: false
    }

    componentDidMount = () => {
        Axios.get('https://pro-organizer-f83b5.firebaseio.com/boardData.json')
            .then(response => {
                for(let value in response.data) {
                    this.setState({
                        boardData: response.data[value]
                    })
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    serverError: error
                })
            });
    }

    render() {
        let boards = null;

        Object.keys(this.state.boardData).length > 0 ?
        boards = boardData.allBoards.map(boards => {
            return (
                <Link 
                    to={{
                        pathname: `/board/${boards.id}`,
                        state: {boardData: boardData.boards[boards.id]}
                    }} 
                    key={boards.id}>
                    <div className={styles.BoardCard}>
                        {boards.name}
                    </div>
                </Link>
            )
        }) :
        boards = <div className={styles.Loading}>Loading...</div>

        return (
            <div>
                <p className={boardStyles.BoardTitle}>Boards</p>
                <div className={styles.Boards}>
                    {boards}
                    {this.state.serverError ? <p>There seems to be a server error. Please try again later.</p> : null}
                </div>
            </div>
        )
    }
}

export default Boards;
