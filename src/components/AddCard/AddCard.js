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
        ],
        incompleteForm: false
    }

    static getDerivedStateFromProps = (props, state) =>  {
        if(props.editCard) {
            let formElements = [...state.formElements];
            let cardData = props.cardData.card[0];
            for(let element of formElements) {
                if(element.id === 'due_date') {
                    let date = new Date(cardData[element.id]);
                    let finalDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    element.value = finalDate;
                } else {
                    element.value = cardData[element.id];
                }

            }
            state.formElements = formElements;
        }
        return state;
    }

    addCardHandler = () => {
        let values = {};
        let formElements = this.state.formElements
        for(let key in formElements) {
            values[formElements[key].id] = formElements[key].value;
        }
        this.props.addCard(values);
    }

    formChangeHandler = (id, value) => {
        // console.log(id, value, this.state);
        let updatedFormElements = this.state.formElements.map(ele => {
            // debugger;
            if(ele.id === id) {
                ele.value = value;
                // console.log(ele.value);
                return ele;
            } else {
                return ele;
            }
        })
        // console.log(updatedFormElements);
        this.setState({
            formElements: updatedFormElements
        })
    }

    render() {
        // console.log(this.state);
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
