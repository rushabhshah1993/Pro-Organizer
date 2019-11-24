import React, { Component } from 'react';
import styles from './AddCard.css';
import boardStyles from './../../pages/Board/Board.css';
import createBoardStyles from './../../pages/CreateBoard/CreateBoard.css';

import FormElements from './../FormElements/FormElements';

class AddCard extends Component {
    state = {
        formElements: [
            {
                type: 'text',
                placeholder: 'e.g. Add a new icon',
                label: 'Enter a title for your task',
                id: 'title'
            },
            {
                type: 'text',
                placeholder: 'Choose members for this task',
                label: 'Choose members for this task',
                id: 'members'
            },
            {
                type: 'textarea',
                placeholder: 'Add your description here',
                label: 'Add the description for your task',
                id: 'description'
            },
            {
                type: 'date',
                placeholder: 'Select the due-date',
                label: 'Select the due-date for this task',
                id: 'due_date'
            }
        ]
    }

    render() {
        let formElements = this.state.formElements.map(element => {
            return <FormElements element={element} key={element.id} />
        })

        return (
            <div className={styles.AddCard}>
                <p className={boardStyles.BoardTitle}>Add Card</p>
                { formElements }
                <button className={createBoardStyles.CreateButton}>Add Card</button>
            </div>
        )
    }
}

export default AddCard;
