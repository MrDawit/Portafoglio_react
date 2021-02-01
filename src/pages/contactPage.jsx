import React from 'react';
import ContactForm from '../components/ContactForm';
import Spacer from '../components/Spacer';
import "../assets/css/contactPage.css";

const ContactPage = () => {

    return (
        <div className="bod">
            {/* <Navbar /> */}
            {/* <ul>
                {["I ", "am a ", "Coder"].map((contact, idx) => {
                    return <li key={idx}>{contact}</li>
                })}
            </ul> */}

            <main className="col-xs-12 col-lg-10">


                <h1>Contact</h1>
                <ContactForm />


            </main>
            <Spacer />
            {/* <Footer /> */}
        </div>
    )
};

export default ContactPage;