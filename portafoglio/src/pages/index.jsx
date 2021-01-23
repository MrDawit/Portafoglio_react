import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/Header';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainPage = () => {

    return (
        <>
            {/* <Navbar /> */}
            <Header />
            <main className="col-xs-12 col-lg-10">

                <div>

                    <h1>Bio</h1>
                    <img alt={"Shalom Dawit"} src={require("../assets/img/PIC.JPG").default} className="image-wrapper float-left img-responsive pr-2" id="Image" />

                    <article className="pull-right">
                        Greetings to my portfolio! My name is Shalom Dawit and I am a future full-stack developer with big dreams. My heritage is from Eritrea/Ethiopia, but my heart is from California. I grew up in Southern Connecticut and went to school at Uconn School of Engineering. I am currently also a para-educator and, before the pandemic, taught Jujutsu at Uconn. I try to be a people-person when working with clients and groups by solving problems without disrupting the nature of the subject. Hopefully that translates into my work previously, currently and in to the future. Thank you for taking the time to look at my skills!
                    </article>
                    <a id="purple" href="./assets/files/Shalom_Dawit_Resume.docx" target="_blank">RESUME</a>
                </div>

            </main>
            {/* link test */}
            {/* <small>Main <Link to='/bio'>Page</Link></small> */}
            <Footer />
        </>
    );
};

export default MainPage;