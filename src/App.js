import React from 'react';
import {
  Route,
  Switch,
  Link
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

      upfrontPayment: false,

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

      isAgreed: false,

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;

    this.setState({
      [target.id]: {
        ...this.state[target.id],
        value: Number(target.value),
      }
    });
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
                    {this.state.duration.possible_values.map((value) => {
                      return (
                        <div key={`duration${value}`}>
                          <label htmlFor="duration">
                            {value} Month
                          </label>
                          <input
                            type="radio"
                            id="duration"
                            name="duration"
                            value={value}
                            onChange={this.handleChange}
                            checked={value === this.state.duration.value}
                          />
                      </div>
                      );
                    })}
                  <label htmlFor="gigabytes-select">Choose amount of your cloud gigabytes:</label>
                  <select 
                    name="gigabytes"
                    id="gigabytes-select"
                    value= {this.state.gigabytes.value}
                    defaultValue= "5"
                    onChange={this.handleChange}  
                  >
                    <option value="3">3</option>
                    <option defaultValue>5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                  </select>
                  <div className="upfront-payment">
                    <label htmlFor="upfront">Upfront payment:</label>
                    <input
                      type="radio"
                      id="upfront"
                      name="upfrontPayment"
                      value={this.state.upfrontPayment}
                      onChange={this.handleChange}
                    />
                  </div>
                  <Link className="next-button" to="/step-2">Next</Link>
                </div>
              );
            }}
          />
          <Route
            path="/step-2"
            component={() => {
              return (
                <div>
                  <form action="" method="get">
                    <div className="user-data">
                      <label htmlFor="name">First name:</label>
                      <input
                        type="text"
                        name="firstName"
                        id="name"
                        value={this.state.firstName.value}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="user-data">
                      <label htmlFor="name">Last name:</label>
                      <input
                        type="text"
                        name="lastName"
                        id="name"
                        value={this.state.lastName.value}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="user-data">
                      <label htmlFor="email">Email: </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="^[^@]+@[^@]+\.[^@]+$"
                        value={this.state.email.value}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="user-data">
                      <label htmlFor="street-address">Street Address:</label>
                      <input
                        type="text"
                        name="streetAdress"
                        id="street-address"
                        value={this.state.streetAdress.value}
                        onChange={this.handleChange}
                        required
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
            component={() => {
              return (
                <div>
                  <form action="" method="get" className="card-data">
                    <div className="payment__inputs">
                      <div className="payment__card-group">
                        <p className="text-input">
                          <input
                            type="text"
                            class="text-input__input"
                            name="cardNumber"
                            id="payment__card-number"
                            value={this.state.cardNumber.value}
                            onChange={this.handleChange}
                            required
                          />
                          <label className="text-input__label" htmlFor="payment__card-number">Payment card number</label>
                        </p>
                        <p className="text-input">
                          <label className="text-input__label" htmlFor="payment__card-date">mm/yy</label>
                          <input
                            type="text"
                            className="text-input__input"
                            name="cardExpDate"
                            id="payment__card-date"
                            placeholder="mm/yy"
                            pattern="^((0[1-9])|(1[0-2]))\/(\d{2})$"
                            value={this.state.cardExpDate.value}
                            onChange={this.handleChange}
                            required
                          />
                        </p>
                        <p className="text-input">
                          <label className="text-input__label" htmlFor="payment__card-cvv">CVC</label>
                          <input
                            type="text"
                            class="text-input__input"
                            name="cardCVV"
                            id="payment__card-cvv"
                            pattern="[1-9][0-9][0-9]"
                            value={this.state.cardCVV.value}
                            onChange={this.handleChange}
                            required
                          />  
                        </p>
                      </div>
                      <div className="payment__cardholder-group">
                        <p className="text-input">
                          <label className="text-input__label" htmlFor="payment__cardholder">Cardholder name</label>
                          <input
                            type="text"
                            className="text-input__input"
                            name="cardHolderName"
                            id="payment__cardholder"
                            value={this.state.cardHolderName.value}
                            onChange={this.handleChange}
                            required
                          /> 
                        </p>
                      </div>
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
            component={() => {
              return (
                <div>
                  <div className="order-summary">
                    <ul className="subscription-parameters-list">
                      <li>Duration: </li>
                      <li>Amount of gigabytes in a cloud: {this.state.gigabytes.value}</li>
                      <li>Upfront payment: {() => { return (this.state.upfrontPayment.value) ? "Yes" : "No" }}</li>
                    </ul>
                    <ul className="user-data-list">
                      <li>{this.state.firstName.value}</li>
                      <li>{this.state.lastName.value}</li>
                      <li>{this.state.email.value}</li>
                      <li>{this.state.streetAdress.value}</li>
                    </ul>
                    <ul className="card-data-list">
                      <li>{this.state.cardNumber.value}</li>
                      <li>{this.state.cardExpDate.value}</li>
                      <li>{this.state.cardCVV.value}</li>
                      <li>{this.state.cardHolderName.value}</li>
                    </ul>
                    <p className="price-output">$100</p>
                    <p className="discount">- 10%</p>
                  </div>
                  <div className="terms-agreement-container">
                    <input
                      type="radio"
                      id="terms-agreement"
                      name="terms-agreement"
                      value={this.state.isAgreed}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="terms-agreement">
                      Check here to indicate that you have read and agree to the terms of the <a href="https://cloud.google.com/terms/">Cloud Storage Terms of Service</a>
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
