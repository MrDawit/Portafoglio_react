import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
// import Spacer from '../components/Spacer';
import Tilt from '../components/Tilt/Tilt.js';
import "../assets/css/contactPage.css";
// import axios from 'axios';

const ContactPage = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
    // const submitRequest = async event => {
    //     event.preventDefault();
    //sending the request through axios also works nicely
    // axios.post('/api/contact',{ name,email, subject, message })
    // };

    //WORKS
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const submitRequest = async (e) => {
    //     e.preventDefault();
    //     console.log({ email, message });

    //     const url = '/api/contact';
    //     const options = {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json;charset=UTF-8'
    //       },
    //       body: JSON.stringify({
    //          email,
    //          message
    //       })
    //     };

    //     fetch(url, options)
    //       .then(response => {
    //         console.log(response.status);
    //       });
    // };

    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            },
        }}>
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

                    {/* WORKS
                <form  onSubmit={submitRequest}>
            <label >Name:</label>
            <br />
            <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}
              value={name}/>
            <br />
            <label >Email:</label>
            <br />
            <input type="text" id="email" name="email"  onChange={e => setEmail(e.target.value)}
              value={email}
              />
            <br />
            <label >Subject:</label>
            <br />
            <input type="text" id="subject" name="subject"  onChange={e => setSubject(e.target.value)}
              value={subject}
              />
              <br />
            <label >Message:</label>
            <br />
            <textarea id="message" type="text" name="message" cols="40" 
            onChange={e => setMessage(e.target.value)}
            value={message}
            />
            
            <br />
         
            <input id="submitBtn" type="submit" value="Submit"/>
            </form> */}






                </main>
                {/* <Spacer /> */}
                <Tilt />
                {/* <Footer /> */}
            </div>
        </motion.div>
    )
};

export default ContactPage;