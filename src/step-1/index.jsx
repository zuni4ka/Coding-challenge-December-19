import * as React from 'react';
import cx from 'classnames';
import Navigation from '../navigation';

import * as stepStyles from '../step.module.css';
import * as styles from './index.module.css';

const Step1 = ({
  product,
  handleBooleanChange,
  handleNumberChange,
  handleNextStep,
}) => {
  return (
    <section>
      <h1 className={stepStyles.step_title}>Step 1</h1>
      <p>Select a subscription duration:</p>
      <div className={cx(stepStyles.step_field, styles.duration_wrap)}>
        {product.duration.possible_values.map((value) => {
          const id = `duration${value}`;
          const checked = value === product.duration.value;

          return (
            <label
              className={cx(styles.duration_label, {
                [styles.duration_label__checked]: checked,
              })}
              htmlFor={id}
              key={id}
              style={{ width: `${100 / product.duration.possible_values.length}%` }}
            >
              <span className={styles.duration_title}>{value}</span>
              <span className={styles.duration_text}>Months</span>
              <input
                type="radio"
                id={id}
                name="duration"
                value={value}
                onChange={handleNumberChange}
                checked={checked}
              />
            </label>
          );
        })}
      </div>
      <div className={stepStyles.step_field}>
        <label
          htmlFor="gigabytes-select"
          className={stepStyles.step_label}
        >
          Choose amount of your cloud gigabytes:
      </label>
        <select
          name="gigabytes"
          id="gigabytes"
          onChange={handleNumberChange}
          value={product.gigabytes.value}
        >
          {product.gigabytes.possible_values.map((value) => {
            return (
              <option
                key={`gigabytes${value}`}
              >
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="upfront-payment">
        <input
          type="checkbox"
          id="upfrontPayment"
          name="upfrontPayment"
          value={product.upfrontPayment.value}
          onChange={handleBooleanChange}
          checked={product.upfrontPayment.value}
        />
        <label htmlFor="upfrontPayment">Upfront payment</label>
      </div>
      <Navigation
        nextId="step1"
        nextTo="/step-2"
        handleNextStep={handleNextStep}
      />
    </section>
  );
};

export default Step1;
