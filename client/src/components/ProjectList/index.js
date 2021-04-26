import React, { useState, useContext } from "react";
import ProjectCard from "../ProjectCard";
import { ProjectContext } from "../../utils/ProjectContext"

const ProjectList = () => {
    const [projects, setProjects] = useContext(ProjectContext)
    return (
        <div className="container">
            <div className="row">
                {projects.map(project => (
                   
                     <div className="col-sm-12 col-md-6 " key={project.id}>
                        <ProjectCard name={project.name} imageURL={project.imageURL} description_short={project.description_short} GitHubRepo={project.GitHubRepo} deployURL={project.deployURL} loginInfo ={project.loginInfo}/>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ProjectList;