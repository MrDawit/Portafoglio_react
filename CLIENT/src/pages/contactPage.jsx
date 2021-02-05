import React,{useState} from 'react';
// import ContactForm from '../components/ContactForm';
import Spacer from '../components/Spacer';
import "../assets/css/contactPage.css";

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const submitRequest = async event => {
        event.preventDefault();
        try {
            await fetch(`/api/contacting`, {
                method: 'post',
                headers: {
                    
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    email,
                    message
                })
            })
                .then(response => console.log(response))
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error);
        }
  };

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
        <div className="bod">
            {/* <Navbar /> */}
            {/* <ul>
                {["I ", "am a ", "Coder"].map((contact, idx) => {
                    return <li key={idx}>{contact}</li>
                })}
            </ul> */}

            <main className="col-xs-12 col-lg-10">


                <h1>Contact</h1>
                {/* <ContactForm /> */}

                        {/* WORKS */}
                <form  onSubmit={submitRequest}>
            <label >Name:</label>
            <br />
            <input type="text" id="name" name="user" />
            <br />
            <label >Email:</label>
            <br />
            <input type="text" id="email" name="email"  onChange={e => setEmail(e.target.value)}
              value={email}
              
              />

            <br />
            <label >Message:</label>
            <br />
            <input id="message" type="text" name="message" cols="40" 
            onChange={e => setMessage(e.target.value)}
            value={message}
            
            />
            
            <br />
         
            <input id="submitBtn" type="submit" value="Submit"/>
            </form>






            </main>
            <Spacer />
            {/* <Footer /> */}
        </div>
    )
};

export default ContactPage;