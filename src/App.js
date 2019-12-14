import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Step1 from './step-1';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      duration: {
        value: 12,
        possible_values: [3, 6, 12],
      },

      gigabytes: {
        value: 5,
        possible_values: [3, 5, 10, 20, 30, 50],
      },

      upfrontPayment: {
        value: false,
      },

      firstName: {
        value: '',
        required: true,
        error: null,
      },

      lastName: {
        value: '',
        required: true,
        error: null,
      },

      email: {
        value: '',
        required: true,
        error: null,
      },

      streetAdress: {
        value: '',
        required: true,
        error: null,
      },

      cardNumber: {
        value: '',
        required: true,
        error: null,
      },

      cardExpDate: {
        value: '',
        required: true,
        error: null,
      },

      cardCVV: {
        value: '',
        required: true,
        error: null,
      },

      cardHolderName: {
        value: '',
        required: true,
        error: null,
      },

      isAgreed: {
        value: false,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBooleanChange = this.handleBooleanChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleChange(e, convert) {
    const target = e.target;

    this.setState({
      [target.name]: {
        ...this.state[target.name],
        value: convert ? convert(target.value) : target.value,
      }
    });
  }

  handleBooleanChange(e) {
    this.handleChange(e, (value) => !(value === 'true'));
  }

  handleNumberChange(e) {
    this.handleChange(e, Number);
  }

  render() {
    const { state } = this;

    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Step1
                product={state}
                handleNumberChange={this.handleNumberChange}
                handleBooleanChange={this.handleBooleanChange}
              />
            )}
          />
          <Route
            path="/step-2"
            render={() => {
              return (
                <div>
                  <form action="" method="get">
                    <div className="user-data">
                      <label htmlFor="name">First name:</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={state.firstName.value}
                        onChange={this.handleChange}
                        required={state.firstName.required}
                      />
                    </div>
                    <div className="user-data">
                      <label htmlFor="name">Last name:</label>
                      <input
                        type="text"
                        name="lastName"
                        id="name"
                        value={state.lastName.value}
                        onChange={this.handleChange}
                        required={state.lastName.required}
                      />
                    </div>
                    <div className="user-data">
                      <label htmlFor="email">Email: </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="^[^@]+@[^@]+\.[^@]+$"
                        value={state.email.value}
                        onChange={this.handleChange}
                        required={state.email.required}
                      />
                    </div>
                    <div className="user-data">
                      <label htmlFor="street-address">Street Address:</label>
                      <input
                        type="text"
                        name="streetAdress"
                        id="street-address"
                        value={state.streetAdress.value}
                        onChange={this.handleChange}
                        required={state.streetAdress.required}
                      />
                    </div>
                  </form>
                  <div className="buttons">
                    <Link className="return-button" to="/">Back</Link>
                    <Link className="next-button" to="/step-3">Next</Link>
                  </div>
                </div>
              );
            }} />
          <Route
            path="/step-3"
            render={() => {
              return (
                <div>
                  <form action="" method="get" className="card-data">
                    <div className="payment-input">
                      <p className="text-input">
                        <input
                          type="text"
                          className="text-input__input"
                          name="cardNumber"
                          id="cardNumber"
                          value={state.cardNumber.value}
                          onChange={this.handleChange}
                          required={state.cardNumber.required}
                        />
                        <label className="text-input__label" htmlFor="cardNumber">Payment card number</label>
                      </p>
                      <p className="text-input">
                        <label className="text-input__label" htmlFor="card-date">mm/yy</label>
                        <input
                          type="text"
                          className="text-input__input"
                          name="cardExpDate"
                          id="card-date"
                          placeholder="mm/yy"
                          pattern="^((0[1-9])|(1[0-2]))\/(\d{2})$"
                          value={state.cardExpDate.value}
                          onChange={this.handleChange}
                          required={state.cardExpDate.required}
                        />
                      </p>
                      <p className="text-input">
                        <label className="text-input__label" htmlFor="card-cvv">CVC</label>
                        <input
                          type="text"
                          class="text-input__input"
                          name="cardCVV"
                          id="card-cvv"
                          pattern="[1-9][0-9][0-9]"
                          value={state.cardCVV.value}
                          onChange={this.handleChange}
                          required={state.cardCVV.required}
                        />
                      </p>
                      <p className="text-input">
                        <label className="text-input__label" htmlFor="cardholder-name">Cardholder name</label>
                        <input
                          type="text"
                          className="text-input__input"
                          name="cardHolderName"
                          id="cardholder-name"
                          value={state.cardHolderName.value}
                          onChange={this.handleChange}
                          required={state.cardHolderName.required}
                        />
                      </p>
                    </div>
                  </form>
                  <div className="buttons">
                    <Link className="return-button" to="/step-2">Back</Link>
                    <Link className="next-button" to="/step-4">Next</Link>
                  </div>
                </div>
              );
            }} />
          <Route
            path="/step-4"
            render={() => {
              const getPrice = () => {
                let price = state.duration.value * 2;

                if (state.upfrontPayment.value) {
                  price *= 0.9;
                }

                return price;
              };

              return (
                <div>
                  <div className="order-summary">
                    Order summary:
                    <ul className="subscription-parameters-list">
                      <li>Duration: {state.duration.value}</li>
                      <li>Amount of gigabytes in a cloud: {state.gigabytes.value}</li>
                      <li>
                        {`Upfront payment: ${state.upfrontPayment.value ? 'Yes' : 'No'}`}
                      </li>
                    </ul>
                    <p className="price-output">${getPrice()}</p>
                    {
                      state.upfrontPayment.value &&
                      <p className="discount">10% discount included</p>
                    }
                  </div>
                  <div className="terms-agreement-container">
                    <input
                      type="checkbox"
                      id="terms-agreement"
                      name="isAgreed"
                      value={state.isAgreed.value}
                      onChange={this.handleBooleanChange}
                      checked={state.isAgreed.value}
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
            }} />
        </Switch>
      </div>
    );
  }
}

export default App;
