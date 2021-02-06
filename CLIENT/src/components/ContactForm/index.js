
import React, { useState } from "react";
import "./style.css";
import Results from "../Results/index.js";

function ContactForm() {
  const [name, setName] = useState('');
  const [contactWay, setContactWay] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState(false);


  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ name, contactWay, message });
    var data = { name, contactWay, subject, message };
    const url = '/api/contact';
    const options = {
      method: 'POST',
      headers: {
        
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      
    };

    fetch(url, options)
      .then(response => {
        console.log(response.status);
      })
      .then(response => response.json())
      .then(function (data) {
        console.log(data);
      })
  };

  // function refreshPage() {
  //   window.location.reload(false);
  // }
// function emailCompletion(){
 
//  console.log(confirmation);

// }

  return (
    <>
    { confirmation && <Results/>}
    <form onSubmit={submitRequest}>
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" placeholder="ENTER YOUR NAME" onChange={e => setName(e.target.value)}
        value={name} />
      <br />
      <label htmlFor="contactWay">Contact Info:</label>
      <br />
      <input type="text" id="contactWay" name="contactWay" placeholder="EMAIL, PHONE #, ETC.." onChange={e => setContactWay(e.target.value)}
        value={contactWay}
        required
      />
      <br />
      <label htmlFor="subject" >Subject:</label>
      <br />
      <input type="text" id="subject" name="subject" placeholder="SPECIFY THE SUBJECT" onChange={e => setSubject(e.target.value)}
        value={subject}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <br />
      <textarea id="message" type="text" name="message" placeholder="WRITE YOUR MESSAGE" cols="40"
        onChange={e => setMessage(e.target.value)}
        value={message}
        required
      />
      <br />
      {/* Deprecated Page Refresh */}
      {/* <input id="submitBtn" type="submit" value="Submit" onClick={refreshPage}/> */}
      <input id="submitBtn" type="submit" value="Submit" onClick={() => setConfirmation(true)}/>
      {/* <input id="submitBtn" type="submit" value="Submit" onClick={emailCompletion}/> */}
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
        {/* <div onChange={e => setConfirmation("Email Has Been Sent!")}/> */}
      </div>
    </form>
    </>
  );
}

export default ContactForm;