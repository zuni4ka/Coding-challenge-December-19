import * as React from 'react';

import * as stepStyles from '../step.module.css';
import * as styles from './index.module.css';

const Input = ({
    onChange,
    field,
    label,
    name,
    id,
    type,
    required,
}) => {
    return (
        <div className={stepStyles.step_field}>
            <label
                className={stepStyles.step_label}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className={styles.input}
                type={type || "text"}
                name={name}
                id={id}
                value={field.value}
                onChange={onChange}
                required={required}
            />
            {field.error &&
                <div className={styles.input_error}>
                    {field.error}
                </div>
            }
        </div>
    );
};

export default Input;