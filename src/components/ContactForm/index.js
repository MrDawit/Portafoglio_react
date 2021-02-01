
import React from "react";
import "./style.css";

function ContactForm() {
    return (
        <form>
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" />
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <label for="message">Message:</label>
            <br />
            <textarea id="message" name="message" cols="40"></textarea><br />
            <input id="submitBtn" type="submit" value="SUBMIT" />
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