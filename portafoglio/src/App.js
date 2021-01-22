import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//   brought outside (BrowserRouter as Router,)
// import { 
// HashRouter as Router, 
//   Route
// } from 'react-router-dom';

import { 
    HashRouter as Router, 
      Route, 
      Switch, 
      Redirect 
    } from 'react-router-dom';

//Pages
import MainPage from './pages';
import NotFoundPage from './pages/404';
import ContactPage from './pages/contactPage';
import PortfolioPage from './pages/portfolioPage';


import ProjectList from './components/Project-List';
import {ProjectProvider} from "./utils/ProjectContext";





class App extends Component {
    render() {
        return <Router>
            <ProjectProvider>
            <Switch>
            <Route exact path="/" component={ProjectList}></Route>
            <Route exact path="/react-portfolio" component={ProjectList}></Route>

            <Route exact path='/main' component={MainPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
           
            <Route exact path ='/404' component={NotFoundPage} />
            <Redirect to='/404' />
            </Switch> 
            </ProjectProvider>
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


