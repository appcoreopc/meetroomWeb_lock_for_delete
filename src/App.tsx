/*import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from '@material-ui/core/Button';
*/
import * as React from 'react';
import './App.css';
import AdminTab from './components/adminTab/adminTab';
import Footer from './components/footer/footer';
import TopNavigation from './components/topNavigation/topNavigation';
import TopTiles from './components/topNavigation/topTiles';
import MainContent from './components/content/mainContent';

class App extends React.Component {


  public render() {

    return (     
      <div>
         <AdminTab />
         <Footer />
         <TopNavigation />
         <TopTiles />



         <MainContent />
      </div>   
    );
  }
}

export default App;

