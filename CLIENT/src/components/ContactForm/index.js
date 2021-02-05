
import React, {useState} from "react";
import "./style.css";

function ContactForm() {
    const[name, setName] = useState('');
       const [email, setEmail] = useState('');
       const[subject, setSubject] = useState('');
     const [message, setMessage] = useState('');
    const submitRequest = async (e) => {
             e.preventDefault();
             console.log({ name, email, message });
            var data={ name,email, subject, message };
             const url = '/api/contact';
             const options = {
               method: 'POST',
               headers: {
                 //DOES NOT WORK WITH THIS KEY AND VALUE
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
              // body:data
             };
             
             fetch(url, options)
               .then(response => {
                 console.log(response.status);
               })
              .then(response => response.json())
               .then(function(data) {
                console.log(data);
               })
    };

    return (
        <form  onSubmit={submitRequest}>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" onChange={e => setName(e.target.value)} 
            value={name}/>
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id="email" name="email"  onChange={e => setEmail(e.target.value)}
              value={email}
              required
              />
               <br />
            <br />
                <label >Subject:</label>
            <br />
            <input type="text" id="subject" name="subject"  onChange={e => setSubject(e.target.value)}
              value={subject}
              />
             <br />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" type="text" name="message" cols="40" 
            onChange={e => setMessage(e.target.value)}
            value={message}
            required
            />
            
            <br />
         
            <input id="submitBtn" type="submit" value="Submit"/>
          
            <br /><br />
            <div id="contact_links"><img alt="LinkedIn_Image" src={require("../../assets/img/icon-linkedin.png").default} />
                <a href="https://www.linkedin.com/in/shalom-dawit-a0a5a4126"
                    target="_blank" rel="noreferrer">
                    Linkedin.com/in/Shalom-Dawit-a0a5a4126
                </a>
                <br />
                <img alt="Github_Image" src={require("../../assets/img/github-logo.png").default} />
                <a href={"https://github.com/MrDawit"} target="_blank" rel="noreferrer">
                    Github.com/MrDawit
                </a>
            </div>
        </form>
    );
}

export default ContactForm;