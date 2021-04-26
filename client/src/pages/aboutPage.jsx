import React from 'react';
import Spacer from '../components/Spacer';
import "../assets/css/aboutPage.css";

import resume from '../assets/files/SHALOM DAWIT Resume.pdf';

const AboutPage = () => {
  
    return (
    
            <div className="bod">
                {/* <Navbar /> */}
                <main className="col-xs-12 col-lg-10">

                    <div>

                        <h1>Bio</h1>
                        <img alt={"Shalom Dawit"} src={require("../assets/img/PIC.JPG").default} className="image-wrapper float-left img-responsive pr-2" id="bioImage" />

                        <article className="pull-right">
                           <span>Greetings into the window of my life! </span>My name is Shalom Dawit. A full-stack developer with big dreams. My educational background consists of Uconn's School of Engineering, where I learned electrical engineering and, more recently, improved on my coding skills, becoming a Full-Stack Coding Bootcamp Grad! Skills that now include Frontend and Backend web development. Having experience with HTML, CSS3, Javascript, React, SQL & NoSQL databases and so much more. Enjoyment in mixing these aspects together and molding them to create a unique product. Creating websites and apps individually as well as with collaborators. A demonstration of these skills was presented in a  group project (ToolShed app) I worked on involving React, Sequelize, BcryptJS, NodeJS, SCSS and more.  My interpersonal skills have made me easy to work with, while pushing my groups to increased productivity. Hopefully that translates my work from before, current and the future. Thank You!  
                    </article>
                        {/* <a id="purple" href={"../assets/img/pic0.jpg"} target="_blank" rel="noreferrer">RESUME</a> */}
                    <a id="purple" href={resume} download="SHALOM DAWIT Resume.pdf"> Resume </a>
                    </div>

                </main>
<Spacer/>

              {/*  <Footer /> */}
            </div>
        
    );
};

export default AboutPage;