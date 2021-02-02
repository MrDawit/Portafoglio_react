
import React, {useState} from "react";
import "./style.css";

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const submitRequest = async (e) => {
        e.preventDefault();
        console.log({ email, message });
        const response = await fetch("/access", { 
          method: 'POST', 
          headers: { 
              'Content-type': 'application/json'
          }, 
          body: JSON.stringify({email, message}) 
      }); 
        const resData = await response.json(); 
        if (resData.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(resData.status === 'fail'){
          alert("Message failed to send.")
      }
      };
    return (
        <form onSubmit={submitRequest}>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id="email" name="email"  onChange={e => setEmail(e.target.value)}
              value={email}
              required
              />

            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" cols="40" 
            onChange={e => setMessage(e.target.value)}
            value={message}
            required
            ></textarea>
            
            <br />
            {/* <div id="submitBtnContainer"> */}
            <input id="submitBtn" type="submit" value="SUBMIT" />
            {/* </div> */}
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