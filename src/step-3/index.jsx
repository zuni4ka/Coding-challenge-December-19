import * as React from 'react';
import {Link} from 'react-router-dom';
import Input from '../input';

const Step3 = ({
    product,
    handleChange,
    handleNextStep,
}) => {
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
                    className="next-button"
                    to="/step-4"
                    onClick={(e) => {
                        handleNextStep(e, ['cardNumber', 'cardExpDate', 'cardCVV', 'cardHolderName']);
                    }}
                >Next</Link>
            </div>
        </div>
    );
};

export default Step3;
