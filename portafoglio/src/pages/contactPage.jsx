import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ContactPage = () => {

    return (
        <>
            <Navbar/>
            <ul>
                {["I ","am a ","Coder"].map((contact, idx) =>{
                    return <li key={idx}>{contact}</li>
                })}
            </ul>
            <Footer/>
        </>
        );
};

export default ContactPage;