import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
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
        value: null,
        required: true,
        error: null,
      },
      lastName: {
        value: null,
        required: true,
        error: null,
      },
      email: {
        value: null,
        required: true,
        error: null,
      },
      streetAdress: {
        value: null,
        required: true,
        error: null,
      },
      cardNumber: {
        value: null,
        required: true,
        error: null,
      },
      cardExpDate: {
        value: null,
        required: true,
        error: null,
      },
      cardCVV: {
        value: null,
        required: true,
        error: null,
      },
      termsAgreement: {
        value: false,
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={() => {
              return (
                <div>
                  <p>Select a subscription duration:</p>
                  <div>
                    <input
                      type="radio"
                      id="quarter"
                      name="duration"
                      value="quarter"
                    />
                    <label for="quarter">3</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="half-year"
                      name="duration"
                      value="half-year"
                    />
                    <label for="half-year">6</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="year"
                      name="duration"
                      value="year"
                      checked
                    />
                    <label for="year">12</label>
                  </div>
                  <label for="gigabytes-select">Choose amount of your cloud gigabytes:</label>
                  <select name="gigabytes" id="gigabytes-select">
                    <option>3</option>
                    <option selected>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>50</option>
                  </select>
                  <div class="upfront-payment">
                    <label for="upfront">Upfront payment:</label>
                    <input
                      type="radio"
                      id="upfront"
                      name="upfront"
                    />
                  </div>
                  <a class="submit-button" href="/step-2">Next</a>
                </div>
              );
            }}
          />
          <Route
            path="/step-2"
            component={() => {
              return (
                <div>
                  <form action="" method="get" class="user-data">
                    <div class="user-data">
                      <label for="name">First name:</label>
                      <input
                        type="text"
                        name="first-name"
                        id="name"
                        required
                      />
                    </div>
                    <div class="user-data">
                      <label for="name">Last name:</label>
                      <input
                        type="text"
                        name="last-name"
                        id="name"
                        required
                      />
                    </div>
                    <div class="user-data">
                      <label for="email">Email: </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="^[^@]+@[^@]+\.[^@]+$"
                        required
                      />
                    </div>
                    <div class="user-data">
                      <label for="street-address">Street Address:</label>
                      <input
                        type="text"
                        name="street"
                        id="street-address"
                        required
                      />
                    </div>
                  </form>
                  <div class="buttons">
                    <a class="return-button" href="/">Back</a>
                    <a class="submit-button" href="/step-3">Next</a>
                  </div>
                </div>
              );
            }} />
          <Route
            path="/step-3"
            component={() => {
              return (
                <div>
                  <form action="" method="get" class="card-data">
                  <div class="payment__inputs">
                    <div class="payment__card-group">
                      <p class="text-input">
                        <input
                          type="text"
                          class="text-input__input"
                          name="card-number"
                          id="payment__card-number"
                          required
                        />
                        <label class="text-input__label" for="payment__card-number">Payment card number</label>
                      </p>
                      <p class="text-input">
                        <input
                          type="text"
                          class="text-input__input"
                          name="card-date"
                          id="payment__card-date"
                          placeholder="mm/yy"
                          pattern="^((0[1-9])|(1[0-2]))\/(\d{2})$"
                          required
                        />
                        <label class="text-input__label" for="payment__card-date">mm/yy</label>
                      </p>
                      <p class="text-input">
                        <input
                          type="text"
                          class="text-input__input"
                          name="card-cvc"
                          id="payment__card-cvc"
                          pattern="[1-9][0-9][0-9]"
                          required
                        />
                        <label class="text-input__label" for="payment__card-cvc">CVC</label>
                      </p>
                    </div>
                    <div class="payment__cardholder-group">
                      <p class="text-input">
                        <input
                          type="text"
                          class="text-input__input"
                          name="cardholder"
                          id="payment__cardholder"
                          required
                        />
                        <label class="text-input__label" for="payment__cardholder">Cardholder name</label>
                      </p>
                    </div>
                  </div>
                  </form>
                  <div class="buttons">
                    <a class="return-button" href="/step-2">Back</a>
                    <a class="submit-button" href="/step-4">Next</a>
                  </div>
                </div>
              );
            }} />
          <Route
            path="/step-4"
            component={() => {
              return (
                <div>
                  <div class="order-summary">
                    <ul class="subscription-parameters-list">
                      <li>Duration:</li>
                      <li>Amount of gigabytes in a cloud:</li>
                      <li>Upfront payment:</li>
                    </ul>
                    <ul class="user-data-list">
                      <li>First name</li>
                      <li>Last name</li>
                      <li>Email</li>
                      <li>Street Address</li>
                    </ul>
                    <ul class="card-data-list">
                      <li>Card number</li>
                      <li>Card expiration date</li>
                      <li>Card security code</li>
                      <li>Cardholder name</li>
                    </ul>
                    <p class="price-output">$100</p>
                    <p class="discount">- 10%</p>
                  </div>
                  <div class="terms-agreement-container">
                    <label for="terms-agreement">Check here to indicate that you have read and agree to the terms of the 
                      <a href="https://cloud.google.com/terms/">Cloud Storage Terms of Service</a>
                    </label>
                    <input
                      type="radio"
                      id="terms-agreement"
                      name="terms-agreement"
                    />
                  </div>
                  <div class="buttons">
                    <a class="return-button" href="/step-3">Back</a>
                    <button class="submit-order" type="submit">Confirm order</button>
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
