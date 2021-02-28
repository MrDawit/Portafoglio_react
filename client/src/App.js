import React, { Component } from 'react';
import './App.css';



import { 
    HashRouter as Router, 
    // BrowserRouter as Router,
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
//was working pre-nodemailer form issue
import {ProjectProvider} from "./utils/ProjectContext";

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';



class App extends Component {
// drawer

    state = {
        sideDrawerOpen: false,
      }
    
      drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
  

    render() {
//drawer
let backdrop;
 
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

        return (
          <>
           <div className='bod'>
          <Router>
        
    
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
     
     
       
            <ProjectProvider>
            <Switch>
            {/* <Route exact path="/" component={ProjectList}></Route> */}
            {/* <Route exact path="/react-portfolio" component={ProjectList}></Route> */}

            <Route exact path="/" component={MainPage}/>
            <Route exact path='/main' component={MainPage} />
            
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
           
            <Route exact path ='/404' component={NotFoundPage} />
            <Redirect to='/404' />
            </Switch> 
            </ProjectProvider>
            <Footer/>
       
     
        </Router>
        </div>
        </>
    )}
}

export default App;



