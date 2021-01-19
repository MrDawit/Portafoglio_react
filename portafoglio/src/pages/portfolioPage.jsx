import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

const PortfolioPage = () => {

    return (

        <div>
            <Navbar />
            <Header />

            <Project>
                <Link to="/">Covid-19 Info App</Link>
            </Project>

            <Project>
                <Link to="/">the ToolShed App</Link>
            </Project>

            <Project>
                <Link to="/">Recipe Tracker</Link>
            </Project>

            <Project>
                <Link to="/">All U Can Burger App</Link>
            </Project>

            <Project>
                <Link to="/">Weather App</Link>
            </Project>

            <Project>
                <Link to="/">Scheduler App</Link>
            </Project>

            <Footer />
        </div>
    );
};

export default PortfolioPage;