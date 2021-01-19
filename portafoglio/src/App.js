import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';

//Pages
import MainPage from './pages';
import NotFoundPage from './pages/404';
import ContactPage from './pages/contactPage';
import PortfolioPage from './pages/portfolioPage';

class App extends Component {
    render() {
        return <Router>
            <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
            <Route exact path ='/404' component={NotFoundPage} />
            <Redirect to='/404' />
            </Switch>
            
        </Router>;
        
    }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


