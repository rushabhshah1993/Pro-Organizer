import React from 'react';

import styles from './FormElements.css';

const FormElements = (props) => {
    let options = null;
    if(props.element.type === 'select') {
        options = props.options.map(option => {
        return <option key={option.id}>{option.initials} - {option.name}</option>
        })
    }

    return (
        <div className={styles.FormElements}>
            <span className={styles.Label}>{props.element.label}</span>
            {
                props.element.type === 'select' ?
                (
                    <select className={styles.Select} multiple>
                        {options}
                    </select>
                ) :
                <input type={props.element.type} placeholder={props.element.placeholder} />
            }
        </div>
    )
}

export default FormElements;
