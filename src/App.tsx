/*import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from '@material-ui/core/Button';
*/
import * as React from 'react';
import './App.css';
import AdminTab from './components/adminTab/adminTab';

class App extends React.Component {
  public render() {
    return (     
      <div>
         <AdminTab />
      </div>   
    );
  }
}


export default App;

