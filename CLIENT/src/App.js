import React, { Component } from 'react';
import './App.css';



import { 
    HashRouter as Router, 
      Route, 
      Switch, 
      Redirect 
    } from 'react-router-dom';

//Pages
import MainPage from './pages/aboutPage';
import NotFoundPage from './pages/404';
import ContactPage from './pages/contactPage';
import PortfolioPage from './pages/portfolioPage';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ProjectList from './components/Project-List';
import {ProjectProvider} from "./utils/ProjectContext";





class App extends Component {

    render() {
        return (
            <div className='bod'>
           
        <Router>
        <Navbar/>
            <ProjectProvider>
            <Switch>
            {/* <Route exact path="/" component={ProjectList}></Route>
            <Route exact path="/react-portfolio" component={ProjectList}></Route> */}
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path='/main' component={MainPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
           
            <Route exact path ='/404' component={NotFoundPage} />
            <Redirect to='/404' />
            </Switch> 
            </ProjectProvider>
        </Router>
        
        <Footer/>
        </div>
    )}
}

export default App;



