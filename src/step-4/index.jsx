import * as React from 'react';
import {Link} from 'react-router-dom';

const Step4 = ({
    product,
    price,
    handleBooleanChange,
}) => {
    return (
        <div>
            <div className="order-summary">
                Order summary:
                <ul className="subscription-parameters-list">
                    <li>Duration: {product.duration.value}</li>
                    <li>Amount of gigabytes in a cloud: {product.gigabytes.value}</li>
                    <li>
                        {`Upfront payment: ${product.upfrontPayment.value ? 'Yes' : 'No'}`}
                    </li>
                </ul>
                <p className="price-output">${price}</p>
                {
                    product.upfrontPayment.value &&
                    <p className="discount">10% discount included</p>
                }
            </div>
            <div className="terms-agreement-container">
                <input
                    type="checkbox"
                    id="terms-agreement"
                    name="isAgreed"
                    value={product.isAgreed.value}
                    onChange={handleBooleanChange}
                    checked={product.isAgreed.value}
                />
                <label htmlFor="terms-agreement">
                    Check here to indicate that you have read and agree to the terms of the <a target="blank" href="https://cloud.google.com/terms/">Cloud Storage Terms of Service</a>
                </label>
            </div>
            <div className="buttons">
                <Link className="return-button" to="/step-3">Back</Link>
                <button className="submit-order" type="submit">Confirm order</button>
            </div>
        </div>
    );
};

export default Step4;
