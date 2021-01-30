import React from 'react';
// import Navbar from '../components/Header';
import Footer from '../components/Footer';
import Header from '../components/Navbar';
import "../assets/css/contactPage.css";

const ContactPage = () => {

    return (
        <div className="bod">
            <Header />
            {/* <ul>
                {["I ", "am a ", "Coder"].map((contact, idx) => {
                    return <li key={idx}>{contact}</li>
                })}
            </ul> */}

            <main className="col-xs-12 col-lg-10">

               
                            <h1>Contact</h1>
                            <form>
                                <label for="name">Name:</label>
                                <br/>
                                <input type="text" id="name" name="name"/>
                                <br/>
                                <label for="email">Email:</label>
                                <br/>
                                <input type="text" id="email" name="email"/>
                                <br/>
                                <label for="message">Message:</label>
                                <br/>
                                <textarea id="message" name="message" cols="40"></textarea><br/>
                                <input type="submit" value="SUBMIT"/>
                                <br/><br/>
                                <div id="contact_links"><img alt="LinkedIn_Image" src={require("../assets/img/icon-linkedin.png").default} />
                                    <a href="https://www.linkedin.com/in/shalom-dawit-a0a5a4126"
                                        target="_blank" rel="noreferrer">
                                        https://www.linkedin.com/in/shalom-dawit-a0a5a4126
                                    </a>
                                    <br/>
                                    <img alt="Github_Image" src={require("../assets/img/github-logo.png").default} />
                                    <a href={"https://github.com/MrDawit"} target="_blank" rel="noreferrer">
                                        https://github.com/MrDawit
                                    </a>
                                </div>
                            </form>
                        
                   
            </main>

            <Footer />
        </div>
    )
};

export default ContactPage;