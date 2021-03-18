import React, { Component } from 'react';
import './App.css';



import { 
    HashRouter as Router, 
   //  BrowserRouter as Router,
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
//   constructor(props){
//     super(props);
//     this.state = {
//         sideDrawerOpen: false
//     }
// }

// handleCallback = (childData) =>{
//     this.setState({sideDrawerOpen: childData})
// }

  // drawer

    state = {
        sideDrawerOpen: false,
        // sideDrawerClose: false,
       // open: false
        // sideDrawerClose: true,
      }
    
      drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }

      // if (this.state.sideDrawerOpen && handleToolbarClick) {
      //   this.drawerToggleClickHandler
      // }
      // drawerCloseToggleClickHandler = () => {
      //   this.setState(prevState => {
      //     return { sideDrawerClose: !prevState.sideDrawerClose }
      //   })
      // }

      // toolbarClickHandler = () => {
      //   this.setState({ sideDrawerClose: true })
      // }
// childCloseDrawer = (linkClick) => {
//   console.log(`linkClink is:${linkClick}`);
//       if (linkClick){
//         this.setState({sideDrawerOpen: false})
//       }
//     }

// componentDidUpdate(prevProps) {
//   const { location } = this.props;
//   if (location !== prevProps.location && this.state.sideDrawerOpen) {
//     this.setState({ sideDrawerOpen: false });
//   }
// }


    render() {
//drawer
let backdrop;
// let sideDrawer;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    //  sideDrawer = <SideDrawer click={this.toolbarClickHandler}/>
    }
    // if (this.state.sideDrawerOpen) {
    //   sidedrawer = <Toolbar click={this.toolbarClickHandler} />
  // let open;   
    // }

    
  
        return (
          <>
           <div className='bod'>
          <Router>
          <Toolbar  drawerClickHandler={this.drawerToggleClickHandler} 
          // sideDrawerWhileOpen={handleToolbarClick}
          />
    
        {/* <Toolbar ronald={this.linkClick} drawerClickHandler={this.drawerToggleClickHandler} /> 
         {sideDrawer} */}

        <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler}/>
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



