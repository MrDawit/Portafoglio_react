import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainPage = () => {

    return (
        
        <div>
            <Navbar/>
            <Header/>
            <small>Main <Link to='/bio'>Page</Link></small>
            <Footer/>
        </div>
        );
};

export default MainPage;