import React from 'react';
import Navbar from '../components/Navbar';


const ContactPage = () => {

    return (
        <div>
            <Navbar/>
            <ul>
                {["I ","am a ","Coder"].map((contact, idx) =>{
                    return <li key={idx}>{contact}</li>
                })}
            </ul>
        </div>
        );
};

export default ContactPage;