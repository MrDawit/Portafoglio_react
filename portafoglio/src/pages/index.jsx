import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainPage = () => {

    return (
        
        <div>
            <Navbar/>
            <h3>Welcome to My Portfolio </h3>
            <small>Main <Link to='/bio'>Page</Link></small>
        </div>
        );
};

export default MainPage;