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
                <div>Step 1</div>
              );
            }}
          />
          <Route
            path="/step-2"
            component={() => {
              return (
                <div>Step 2</div>
              );
            }} />
          <Route
            path="/step-3"
            component={() => {
              return (
                <div>Step 3</div>
              );
            }} />
          <Route
            path="/step-4"
            component={() => {
              return (
                <div>Step 4</div>
              );
            }} />
        </Switch>
      </div>
    );
  }
}

export default App;
