import * as React from 'react';
import {Link} from 'react-router-dom';

const Step1 = ({
    product,
    handleBooleanChange,
    handleNumberChange,
}) => {
    return (
      <div>
        <p>Select a subscription duration:</p>
          {product.duration.possible_values.map((value) => {
            const id = `duration${value}`;
            return (
              <div key={id}>
                <label htmlFor={id}>
                  {value} Month
                </label>
                <input
                  type="radio"
                  id={id}
                  name="duration"
                  value={value}
                  onChange={handleNumberChange}
                  checked={value === product.duration.value}
                />
            </div>
            );
          })}
        <label htmlFor="gigabytes-select">Choose amount of your cloud gigabytes:</label>
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
        <div className="upfront-payment">
          <label htmlFor="upfront">Upfront payment:</label>
          <input
            type="checkbox"
            id="upfrontPayment"
            name="upfrontPayment"
            value={product.upfrontPayment.value}
            onChange={handleBooleanChange}
            checked={product.upfrontPayment.value}
          />
        </div>
        <Link className="next-button" to="/step-2">Next</Link>
      </div>
    );
  };

export default Step1;
