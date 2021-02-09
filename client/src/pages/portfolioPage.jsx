import React from 'react';
import ProjectList from '../components/ProjectList';
import { ProjectProvider } from "../utils/ProjectContext";
import "../assets/css/portfolioPage.css";

const ProjectListPage = () => {

    return (

        <>
        <div className="bod">
        <main className="col-xs-12 col-lg-10">
        <h1>Portfolio</h1>
                <ProjectProvider>
                    <ProjectList/>
                </ProjectProvider>
            </main>
       
            </div>



            
        </>
    );
};

export default ProjectListPage;