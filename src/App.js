import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={() => 1} exact />
        <Route path="/step-2" component={() => 2} />
        <Route path="/step-3" component={() => 3} />
        <Route path="/step-4" component={() => 4} />
      </Switch>
    </div>
  );
}

export default App;
