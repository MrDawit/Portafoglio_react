import React, {useState, createContext} from "react";
//USING : https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4&ab_channel=DevEd

export const ProjectContext = createContext()

export const ProjectProvider = (props)=>{

    const [projects, setProjects] = useState([
        
        {
            id: 1,
            name: "Recipe Tracker",
            status: "Closed",
            description_short: "App to organize your recipes",
            imageURL: "https://raw.githubusercontent.com/MrDawit/Portafoglio_react/main/portafoglio/src/assets/img/main.png",
            // era: "October 2020",
            GitHubRepo:"https://github.com/lcalderin12/Recipe-Tracker",
            deployURL:"https://recipes-tracker-hanzee.herokuapp.com/",
        }, 
        {
            id: 2,
            name: "Cov19 Info",
            status: "Closed",
            description_short: "Covid-19 high level statistics dashboard.",
            imageURL: "https://raw.githubusercontent.com/MrDawit/Portafoglio_react/main/portafoglio/src/assets/img/covid19_info.png",
            era: "October 2020",
            GitHubRepo:"https://github.com/troylochner/covid19-info",
            deployURL:"https://troylochner.github.io/covid19-info/",
        }, 
        {
            id: 3,
            name: "All U Can Burger",
            status: "Open",
            description_short: "App to organize your burger diet using express handlebars",
            imageURL: "https://raw.githubusercontent.com/MrDawit/Portafoglio_react/main/portafoglio/src/assets/img/AllUCanBurger.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/MrDawit/All-U-Can-Burger"
            ,deployURL:"https://all-u-can-burger.herokuapp.com/"
        }, 
 

]); 

    return(
        <ProjectContext.Provider value={[projects,setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}



//export default EmployeeContext;