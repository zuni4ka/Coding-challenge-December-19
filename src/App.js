import * as React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';
import Step4 from './step-4';

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

    this.getPrice = this.getPrice.bind(this);
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

  handleNextStep(event, fields) {
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

  getPrice() {
    let price = this.state.duration.value * 2;

    if (this.state.upfrontPayment.value) {
      price *= 0.9;
    }

    return price;
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
            render={() => (
              <Step2
                product={state}
                handleChange={this.handleChange}
                handleNextStep={this.handleNextStep}
              />
            )} />
          <Route
            path="/step-3"
            render={() => (
              <Step3
                product={state}
                handleChange={this.handleChange}
                handleNextStep={this.handleNextStep}
              />
            )} />
          <Route
            path="/step-4"
            render={() => (
              <Step4
                product={state}
                price={this.getPrice()}
                handleBooleanChange={this.handleBooleanChange}
              />
            )} />
        </Switch>
      </div>
    );
  }
}

export default App;
