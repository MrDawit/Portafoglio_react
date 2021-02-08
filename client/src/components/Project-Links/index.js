import React from "react";


const ProjectLink = ({GitHubRepo, deployURL }) =>{

    return(
    <div>
        <div className="Container">
            <div className="row">
            <a target="_blank" rel="noreferrer" href={deployURL}>Demo   / </a>
      <a target="_blank" rel="noreferrer" href={GitHubRepo}>GitHub Repo</a>
      


  </div>
  </div>
  </div>
        
    )

};

export default ProjectLink;