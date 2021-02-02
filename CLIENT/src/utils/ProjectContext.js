import React, {useState, createContext} from "react";
//USING : https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4&ab_channel=DevEd

export const ProjectContext = createContext()

export const ProjectProvider = (props)=>{

    const [projects, setProjects] = useState([
        
        {
            id: 1,
            name: "Recipe Tracker",
            description_short: "App to organize your recipes",
            imageURL: require("../assets/img/main.png").default,
            GitHubRepo:"https://github.com/lcalderin12/Recipe-Tracker",
            deployURL:"https://recipes-tracker-hanzee.herokuapp.com/",
        }, 
        {
            id: 2,
            name: "Cov19 Info",
            description_short: "Covid-19 high level statistics dashboard.",
            imageURL: require("../assets/img/covid19_info.png").default,
            GitHubRepo:"https://github.com/troylochner/covid19-info",
            deployURL:"https://troylochner.github.io/covid19-info/",
        }, 
        {
            id: 3,
            name: "All U Can Burger",
            status: "Open",
            description_short: "App to organize your burger diet using express handlebars",
            imageURL: require("../assets/img/AllUCanBurger.png").default,
            GitHubRepo:"https://github.com/MrDawit/All-U-Can-Burger",
            deployURL:"https://all-u-can-burger.herokuapp.com/"
        } 
 

]); 

    return(
        <ProjectContext.Provider value={[projects,setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}
