import * as React from 'react';

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
        <div className="user-data">
            <label htmlFor={id}>{label}</label>
            <input
                type={type || "text"}
                name={name}
                id={id}
                value={field.value}
                onChange={onChange}
                required={required}
            />
            {field.error &&
                <div>{field.error}</div>
            }
        </div>
    );
};

export default Input;