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
                id: 'title',
                value: null
            },
            {
                type: 'select',
                placeholder: 'Choose members for this task',
                label: 'Choose members for this task (select multiple, if needed)',
                id: 'members',
                value: null
            },
            {
                type: 'textarea',
                placeholder: 'Add your description here',
                label: 'Add the description for your task',
                id: 'description',
                value: null
            },
            {
                type: 'date',
                placeholder: 'Select the due-date',
                label: 'Select the due-date for this task',
                id: 'due_date',
                value: null
            }
        ]
    }

    addCardHandler = (event) => {
        console.log(event.target.previousSibling());
    }

    formChangeHandler = (id, value) => {
        let updatedFormElements = this.state.formElements.map(ele => {
            if(ele.id === id) {
                ele.value = value;
                return ele;
            } else {
                return ele;
            }
        })
        this.setState({
            formElements: updatedFormElements
        })
    }

    render() {
        let formElements = this.state.formElements.map(element => {
            const ref = React.createRef();
            return <FormElements element={element} reference={ref} key={element.id} options={element.id === 'members' && this.props.members} changed={this.formChangeHandler} />
        })

        return (
            <div className={styles.AddCard}>
                <p className={boardStyles.BoardTitle}>Add Card</p>
                { formElements }
                <button className={createBoardStyles.CreateButton} onClick={this.addCardHandler}>Add Card</button>
            </div>
        )
    }
}

export default AddCard;
