import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navigation from '../navigation';

import * as stepStyles from '../step.module.css';
import * as styles from './index.module.css'

const Step4 = ({
    product,
    price,
    handleBooleanChange,
    previousPassed,
    handleSubmit,
}) => {
    if (!previousPassed) {
        return (
            <Redirect to="/step-3" />
        );
    }

    return (
        <section>
            <h1 className={stepStyles.step_title}>Order Summary</h1>
            <div className="order-summary">
                <dl>
                    <dt className={styles.definition_term}>Duration:</dt>
                    <dd className={styles.definition_description}>{product.duration.value} months</dd>
                    <dt className={styles.definition_term}>Amount of gigabytes in a cloud:</dt>
                    <dd className={styles.definition_description}>{product.gigabytes.value} gigabytes</dd>
                    <dt className={styles.definition_term}>Upfront payment:</dt>
                    <dd className={styles.definition_description}>{product.upfrontPayment.value ? 'Yes' : 'No'}</dd>
                    <dt className={styles.definition_term}>Total Price</dt>
                    <dd className={styles.definition_description}>${price}</dd>
                </dl>
                {
                    product.upfrontPayment.value &&
                    <p className="discount">10% discount included</p>
                }
            </div>
            <div className={stepStyles.step_field}>
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
                {
                    product.isAgreed.error &&
                    <div className={styles.error}>
                        {product.isAgreed.error}
                    </div>
                }
            </div>
            <button
                className={styles.submit}
                type="submit"
                onClick={handleSubmit}
            >
                Confirm order
            </button>
            <Navigation
                backTo="/step-3"
            />
        </section>
    );
};

export default Step4;
