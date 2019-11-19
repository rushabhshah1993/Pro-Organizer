import React from 'react';

import styles from './FormElements.css';

const FormElements = (props) => {
    return (
        <div className={styles.FormElements}>
            <span className={styles.Label}>{props.element.label}</span>
            <input type={props.element.type} placeholder={props.element.placeholder} />
        </div>
    )
}

export default FormElements;
