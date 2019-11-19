import React, { Component } from 'react';

import styles from './CreateBoard.css';

import FormElements from './../../components/FormElements/FormElements';

class CreateBoard extends Component {
    state = {
        formElements : [
            {
                type: 'text',
                placeholder: 'e.g. Agile Sprint Board',
                label: 'Enter a name for your board',
                id: 'name'
            },
            {
                type: 'text',
                placeholder: 'Add your team (separated by commas)',
                label: 'Add your team members',
                id: 'team'
            },
            {
                type: 'text',
                placeholder: 'e.g. Design UX',
                label: 'Enter the type of your board',
                id: 'type'
            }
        ]
    }

    render() {
        let formElements = this.state.formElements.map(element => {
            return <FormElements element={element} key={element.id} />
        })

        return (
            <div className={styles.CreateBoard}>
                <span className={styles.Title}>Create a Board</span>
                <div className={styles.BoardForm}>
                    {formElements}
                </div>
                <button className={styles.CreateButton}>Create</button>
            </div>
        )
    }
}

export default CreateBoard;
