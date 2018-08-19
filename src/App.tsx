import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,  
  Link
} from 'react-router-dom'

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">

      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
      </Router>

    
      

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
