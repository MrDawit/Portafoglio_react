import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectList from '../components/Project-List';
import {ProjectProvider} from "../utils/ProjectContext";

const ProjectListPage = () => {

    return (

        <>
            <Navbar />

            <ProjectProvider>
      <ProjectList/>
      </ProjectProvider>

            {/* <Project>
                <Link to="https://troylochner.github.io/covid19-info/">Covid-19 Info App</Link>
            </Project>

            <Project>
                <Link to="https://all-u-can-burger.herokuapp.com/">the ToolShed App</Link>
            </Project>

            <Project>
                <Link to="/">Recipe Tracker</Link>
            </Project>

            <Project>
                <Link href="https://all-u-can-burger.herokuapp.com/">All U Can Burger App</Link>
            </Project>

            <Project>
                <Link href="https://mrdawit.github.io/WeatherApp/">Weather App</Link>
            </Project>

            <Project>
                <Link to="/">Scheduler App</Link>
            </Project> */}

            <Footer />
        </>
    );
};

export default ProjectListPage;