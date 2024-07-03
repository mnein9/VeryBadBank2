// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#004571' }}>
          <a className="navbar-brand" href="/">Very Bad Bank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">Home</a>
              <a className="nav-item nav-link" href="/create-account">Create Account</a>
              <a className="nav-item nav-link" href="/deposit">Deposit</a>
              <a className="nav-item nav-link" href="/withdraw">Withdraw</a>
              <a className="nav-item nav-link" href="/all-data">All Data</a>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/all-data" component={AllData} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
