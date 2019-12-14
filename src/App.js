import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Input from './input';
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
    this.handleNextStep = this.handleNextStep.bind(this);
  }

  handleChange(e, convert) {
    const target = e.target;
    const field = this.state[target.name];

    this.setState({
      [target.name]: {
        ...field,
        value: convert ? convert(target.value) : target.value,
        error: null,
      }
    });
  }

  handleBooleanChange(e) {
    this.handleChange(e, (value) => !(value === 'true'));
  }

  handleNumberChange(e) {
    this.handleChange(e, Number);
  }

  handleNextStep (event, fields) {
    let isValid = true;

    fields.forEach((name) => {
      const value = this.state[name].value;

      if (!value) {
        this.setState({
          [name]: {
            ...this.state[name],
            error: 'this field is required'
          }
        })

        isValid = false;
      }
    });

    if (isValid) {
      return;
    }

    event.preventDefault();
  };

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
                  <Input
                    label="First name:"
                    name="firstName"
                    id="firstName"
                    field={state.firstName}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="Last name:"
                    name="lastName"
                    id="lastName"
                    field={state.lastName}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="Email:"
                    type="email"
                    name="email"
                    id="email"
                    field={state.email}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="Street Address:"
                    name="streetAdress"
                    id="streetAdress"
                    field={state.streetAdress}
                    onChange={this.handleChange}
                  />
                  <div className="buttons">
                    <Link className="return-button" to="/">Back</Link>
                    <Link
                      className="next-button"
                      to="/step-3"
                      onClick={(e) => {
                        this.handleNextStep(e, ['firstName', 'lastName', 'email', 'streetAdress']);
                      }}
                    >Next</Link>
                  </div>
                </div>
              );
            }} />
          <Route
            path="/step-3"
            render={() => {
              return (
                <div className="payment-input">
                  <Input
                    label="Payment card number:"
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    field={state.cardNumber}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="Card expiration date:"
                    type="number"
                    name="cardExpDate"
                    id="cardExpDate"
                    placeholder="mm/yy"
                    field={state.cardExpDate}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="Card security code:"
                    type="number"
                    name="cardCVV"
                    id="cardCVV"
                    placeholder="mm/yy"
                    field={state.cardCVV}
                    onChange={this.handleChange}
                  /> 
                  <Input
                    label="Cardholder name:"
                    name="cardHolderName"
                    id="cardHolderName"
                    field={state.cardHolderName}
                    onChange={this.handleChange}
                  />
                  <div className="buttons">
                    <Link className="return-button" to="/step-2">Back</Link>
                    <Link
                      className="next-button"
                      to="/step-4"
                      onClick={(e) => {
                        this.handleNextStep(e, ['cardNumber', 'cardExpDate', 'cardCVV', 'cardHolderName']);
                      }}
                    >Next</Link>
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
