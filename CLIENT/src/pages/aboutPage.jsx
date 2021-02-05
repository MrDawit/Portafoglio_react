import React from 'react';
import Spacer from '../components/Spacer';
import "../assets/css/aboutPage.css";

import resume from '../assets/files/Shalom_Dawit_Resume.docx';

const AboutPage = () => {
  
    return (
        <>
            <div className="bod">
                {/* <Navbar /> */}
                <main className="col-xs-12 col-lg-10">

                    <div>

                        <h1>Bio</h1>
                        <img alt={"Shalom Dawit"} src={require("../assets/img/PIC.JPG").default} className="image-wrapper float-left img-responsive pr-2" id="Image" />

                        <article className="pull-right">
                           <span>Greetings to my portfolio! </span> My name is Shalom Dawit and I am a future full-stack developer with big dreams. My heritage is from Eritrea/Ethiopia, but my heart is from California. I grew up in Southern Connecticut and went to school at Uconn School of Engineering. I am currently also a long-term substitute teacher (Algebra) and, before the pandemic, taught Jujutsu at Uconn. I try to be a people-person when working with clients and groups by solving problems without disrupting the nature of the subject. Hopefully that translates into my work previously, currently and in to the future. Thank you for taking the time to look at my skills!
                    </article>
                        {/* <a id="purple" href={"../assets/img/pic0.jpg"} target="_blank" rel="noreferrer">RESUME</a> */}
                    <a id="purple" href={resume} download="Shalom_Dawit_Resume.docx"> Resume </a>
                    </div>

                </main>
<Spacer/>

              {/*  <Footer /> */}
            </div>
        </>
    );
};

export default AboutPage;