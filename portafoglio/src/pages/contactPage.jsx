import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactPage = () => {

    return (
        <div>
            <Navbar />
            <Header />
            {/* <ul>
                {["I ", "am a ", "Coder"].map((contact, idx) => {
                    return <li key={idx}>{contact}</li>
                })}
            </ul> */}

            <main className="col-xs-12 col-lg-10">

                <div className="">
                    <div className="">
                        <div className="">
                            <h1>Contact</h1>
                            <form>
                                <label for="name">Name:</label><br />
                                <input type="text" id="name" name="name" /><br />
                                <label for="email">Email:</label><br />
                                <input type="text" id="email" name="email" /><br />
                                <label for="message">Message:</label><br />
                                <textarea id="message" name="message" cols="40"></textarea><br />
                                <input type="submit" value="SUBMIT" /><br /><br />
                                <div id="contact_links"><img alt="LinkedIn" src={"./assets/images/icon-linkedin.png"} /> */}
                                                 <a href="https://www.linkedin.com/in/shalom-dawit-a0a5a4126"
                                        target="_blank" rel="noreferrer">
                                        {/* https://www.linkedin.com/in/shalom-dawit-a0a5a4126 */}
                                                </a>
                                    <br />
                                    <img alt="Github_Image" src={"./assets/images/github-logo.png"} />
                                    <a href={"https://github.com/MrDawit"} target="_blank" rel="noreferrer">
                                        {/* https://github.com/MrDawit */}
                                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
};

export default ContactPage;