import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';
import Step4 from './step-4';

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
        error: null,
      },

      lastName: {
        value: '',
        error: null,
      },

      email: {
        value: '',
        error: null,
      },

      streetAdress: {
        value: '',
        error: null,
      },

      cardNumber: {
        value: '',
        error: null,
      },

      cardExpDate: {
        value: '',
        error: null,
      },

      cardCVV: {
        value: '',
        error: null,
      },

      cardHolderName: {
        value: '',
        error: null,
      },

      isAgreed: {
        value: false,
        error: null,
      },

      steps: {
        step1: {
          passed: false,
          fields: ['duration', 'gigabytes', 'upfrontPayment'],
        },
        step2: {
          passed: false,
          fields: ['firstName', 'lastName', 'email', 'streetAdress'],
        },
        step3: {
          passed: false,
          fields: ['cardNumber', 'cardExpDate', 'cardCVV', 'cardHolderName'],
        },
        step4: {
          passed: false,
          fields: ['isAgreed'],
        }
      },

      isCompleted: false,
    };

    this.getPrice = this.getPrice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBooleanChange = this.handleBooleanChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleNextStep(e) {
    let isValid = true;
    const { id } = e.target;
    const step = this.state.steps[id];

    step.fields.forEach((name) => {
      const value = this.state[name].value;

      if ([null, ''].includes(value)) {
        this.setState({
          [name]: {
            ...this.state[name],
            error: 'This field is required'
          }
        })

        isValid = false;
      }
    });

    if (isValid) {
      this.setState({
        steps: {
          ...this.state.steps,
          [id]: {
            ...step,
            passed: true,
          }
        }
      });
      return;
    }

    e.preventDefault();
  };

  getData() {
    let data = {};

    Object.values(this.state.steps)
      .forEach((step) => {
        step.fields
          .forEach((field) => {
            data[field] = this.state[field].value;
          });
      });

    return data;
  }

  handleSubmit() {
    if (!this.state.isAgreed.value) {
      this.setState({
        isAgreed: {
          ...this.state.isAgreed,
          error: 'You must agree to the terms and conditions',
        }
      });
      return;
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(this.getData()),
    })
      .then((response) => {
        this.setState({isCompleted: true});
      })
      .catch((err) => {
        // error
      });
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

    if (state.isCompleted) {
      return (
        <div>Your order has been received. Thank you!</div>
      );
    }

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
                handleNextStep={this.handleNextStep}
              />
            )}
          />
          <Route
            path="/step-2"
            render={() => (
              <Step2
                product={state}
                previousPassed={state.steps.step1.passed}
                handleChange={this.handleChange}
                handleNextStep={this.handleNextStep}
              />
            )} />
          <Route
            path="/step-3"
            render={() => (
              <Step3
                product={state}
                previousPassed={state.steps.step2.passed}
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
                previousPassed={state.steps.step3.passed}
                handleBooleanChange={this.handleBooleanChange}
                handleSubmit={this.handleSubmit}
              />
            )} />
        </Switch>
      </div>
    );
  }
}

export default App;
