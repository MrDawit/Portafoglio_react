import React, {  useContext } from "react";
import SkillIcon from "../SkillIcon";
import { SkillIconContext } from "../../utils/IconContext"
import "./style.css"

const SkillIconList = () => {
const [skillIcons, setSkillIcons] = useContext(SkillIconContext)

return(
    
    skillIcons.map((skillIcon) => {
    console.log(`skillIcon is = ${skillIcon.id}`)
    return (
       <div className="container" style={{display: "flex"}}>
        <div className="container" key={skillIcon.id}>
            <SkillIcon name={skillIcon.name} iconUrl={skillIcon.localAddress} />
        </div>
        </div>
        
    )})

 )}

    export default SkillIconList;