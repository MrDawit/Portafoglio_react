import React from "react";
import ProjectLink from "../Project-Links";
import "./style.css"
// import {Link} from "react-router-dom";

const ProjectCard = ({id,name,description_short,GitHubRepo,imageURL,deployURL }) =>{

    return(
      <>
    <div className="card z-depth-3">

      <div className="card-image">
        <img className="tito" alt="holding pattern" src={imageURL}></img>
        
      </div>
      <span className="card-title">{name}</span>

      <div className="card-content">
        <p>{description_short}</p>
      </div>

      <div className="card-action">
        <ProjectLink className="card-link" deployURL={deployURL} GitHubRepo={GitHubRepo}/>
  
      </div>

  </div>
  <br/><br/>
        </>
    )

};

export default ProjectCard;