import * as React from 'react';
import {Redirect} from 'react-router-dom';
import Input from '../input';
import Navigation from '../navigation';

import * as stepStyles from '../step.module.css';

const Step3 = ({
    product,
    handleChange,
    handleNextStep,
    previousPassed,
}) => {
    if (!previousPassed) {
        return (
            <Redirect to="/step-2" />
        );
    }

    return (
        <section>
            <h1 className={stepStyles.step_title}>Step 3</h1>
            <Input
                label="Payment card number:"
                type="number"
                name="cardNumber"
                id="cardNumber"
                field={product.cardNumber}
                onChange={handleChange}
            />
            <Input
                label="Card expiration date:"
                type="number"
                name="cardExpDate"
                id="cardExpDate"
                placeholder="mm/yy"
                field={product.cardExpDate}
                onChange={handleChange}
            />
            <Input
                label="Card security code:"
                type="number"
                name="cardCVV"
                id="cardCVV"
                placeholder="mm/yy"
                field={product.cardCVV}
                onChange={handleChange}
            />
            <Input
                label="Cardholder name:"
                name="cardHolderName"
                id="cardHolderName"
                field={product.cardHolderName}
                onChange={handleChange}
            />
            <Navigation
                backTo="/step-2"
                nextId="step3"
                nextTo="/step-4"
                handleNextStep={handleNextStep}
            />
        </section>
    );
};

export default Step3;
