import * as React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Input from '../input';

const Step2 = ({
    product,
    handleChange,
    handleNextStep,
    previousPassed,
}) => {
    if (!previousPassed) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div>
            <Input
                label="First name:"
                name="firstName"
                id="firstName"
                field={product.firstName}
                onChange={handleChange}
            />
            <Input
                label="Last name:"
                name="lastName"
                id="lastName"
                field={product.lastName}
                onChange={handleChange}
            />
            <Input
                label="Email:"
                type="email"
                name="email"
                id="email"
                field={product.email}
                onChange={handleChange}
            />
            <Input
                label="Street Address:"
                name="streetAdress"
                id="streetAdress"
                field={product.streetAdress}
                onChange={handleChange}
            />
            <div className="buttons">
                <Link className="return-button" to="/">Back</Link>
                <Link
                    className="next-button"
                    id="step2"
                    to="/step-3"
                    onClick={handleNextStep}
                >
                    Next
                </Link>
            </div>
        </div>
    );
};

export default Step2;
