import React from "react";
import "./style.css"


const ProjectCard = ({name,description_short,imageURL,deployURL }) =>{

    return(
      <>
    <div className="card z-depth-3">
    <a target="_blank" rel="noreferrer" href={deployURL}>
      <div className="card-image">
        <img className="tito" alt="holding pattern" src={imageURL}></img>
      </div>
      </a>
      <span className="card-title">{name}</span>

      <div className="card-content">
        <p>{description_short}</p>
      </div>

      <div className="card-action">
        
  
      </div>

  </div>
  <br/><br/>
        </>
    )

};

export default ProjectCard;