import React from "react";
import "./style.css"


const ProjectCard = ({ name, description_short, imageURL, deployURL }) => {

  return (
    <>
      {/* <div className="card z-depth-3"> */}
      <div className="card">
        {/* <a target="_blank" rel="noreferrer" href={deployURL}> */}
          <div className="card-image">
          <a target="_blank" rel="noreferrer" href={deployURL}>
            <img className="portfolio-img" alt="holding pattern" src={imageURL}></img>
            
            <div className="overlay">
              <div className="text">{name}</div>
            </div></a>
          </div>
        {/* </a> */}
        {/* <div className="overlay"><div className="text">{name}</div></div> */}
        <span className="card-title">{name}</span>

        <div className="card-info">
          <p>{description_short}</p>
        </div>

        <div className="card-action">


        </div>

      </div>
      <br /><br />
    </>
  )

};

export default ProjectCard;