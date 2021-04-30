import React from "react";
import "./style.css"


const ProjectCard = ({ name, descriptionShort, imageURL, deployURL, gitHubRepo, loginInfo, skills }) => {

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
        <a target="_blank" rel="noreferrer" href={gitHubRepo}>
          {/* <span className="gitHub">GitHub Repo:</span> */}
          <span className="card-title">GitHub Repo: {name}</span>
          </a>

        <div className="card-info">
          <p id="projDescr">{descriptionShort}</p>
          <p id="skills">{skills}</p>
          <p id="login_info">{loginInfo}</p>
        </div>

        <div className="card-action">


        </div>

      </div>
      <br /><br />
    </>
  )

};

export default ProjectCard;