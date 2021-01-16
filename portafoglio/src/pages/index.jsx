import React from 'react';
import { Link } from 'react-router-dom';


const MainPage = () => {

    return (
        <div>
            <h3>Welcome to My Portfolio </h3>
            <small>Main <Link to='/loaned'>Page</Link></small>
        </div>
        );
};

export default MainPage;