import * as React from 'react';
import {Redirect} from 'react-router-dom';
import Input from '../input';
import Navigation from '../navigation';

import * as stepStyles from '../step.module.css';

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
        <section>
            <h1 className={stepStyles.step_title}>Step 2</h1>
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
            <Navigation
                nextId="step2"
                nextTo="/step-3"
                handleNextStep={handleNextStep}
                backTo="/"
            />
        </section>
    );
};

export default Step2;
