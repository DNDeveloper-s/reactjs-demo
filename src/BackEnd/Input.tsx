import React from 'react';
import styles from './Input.module.css';

export default function Input({values, errors, ...props}: any) {

    return (
        <div className={styles.inputContainer}>
            <label htmlFor="">{props.name}</label>
            <input value={values[props.name] || ""} {...props} required/>
            {errors[props.name] && <p className={styles.error}>Invalid Value</p>}
        </div>
    )
}