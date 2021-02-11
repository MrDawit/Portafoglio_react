import React from 'react';
import ContactForm from '../components/ContactForm';
import Spacer from '../components/Spacer';
import "../assets/css/contactPage.css";

const ContactPage = () => {

    return (
        <div className="bod">
            <main className="col-xs-12 col-lg-10">
                <h1>Contact</h1>
                <ContactForm />
            </main>
            <Spacer />
        </div>
    )
};

export default ContactPage;