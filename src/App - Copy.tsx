import { Link } from 'react-router-dom';
import * as React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logo from './logo.svg';

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
      <hr/>      
      
      </div>     
      
      </Router>
      
      <Button variant="contained" color="primary">
      Hello World
      </Button>
      
      <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
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

