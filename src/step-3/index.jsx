import * as React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Input from '../input';

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
        <div className="payment-input">
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
            <div className="buttons">
                <Link className="return-button" to="/step-2">Back</Link>
                <Link
                    id="step3"
                    className="next-button"
                    to="/step-4"
                    onClick={handleNextStep}
                >
                    Next
                </Link>
            </div>
        </div>
    );
};

export default Step3;
