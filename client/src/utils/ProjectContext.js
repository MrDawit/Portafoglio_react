import React, {useState, createContext} from "react";


export const ProjectContext = createContext()

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
        
        {
            
            name: "The ToolShed",
            descriptionShort: "A REACT app to help users not lose their tools!",
            imageURL: require("../assets/img/toolshed.png").default,
            gitHubRepo:"https://github.com/MrDawit/ToolShed",
            deployURL:"https://toolshed-app-team8.herokuapp.com/",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 1
        },
        {
           
            name: "Covid19 Info",
            descriptionShort: "Covid-19 high level statistics dashboard.",
            imageURL: require("../assets/img/covid19_info.png").default,
            gitHubRepo:"https://github.com/troylochner/covid19-info",
            deployURL:"https://troylochner.github.io/covid19-info/",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 2
        }, 
        {
           
            name: "Recipe Tracker",
            descriptionShort: "App to organize your recipes",
            imageURL: require("../assets/img/main.png").default,
            gitHubRepo:"https://github.com/lcalderin12/Recipe-Tracker",
            deployURL:"https://recipes-tracker-hanzee.herokuapp.com/",
            loginInfo:"* (For Login) EMAIL: Shalom.Dawit@gmail.com PASSWORD: food",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 3
        }, 
        {
           
            name: "All U Can Burger",
            descriptionShort: "App to organize your burger diet using express handlebars",
            imageURL: require("../assets/img/AllUCanBurger.png").default,
            gitHubRepo:"https://github.com/MrDawit/All-U-Can-Burger",
            deployURL:"https://all-u-can-burger.herokuapp.com/",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 4
        },
        {
            
            name: "WeatherApp",
            descriptionShort: "An App giving weather forecast details to a location of choice",
            imageURL: require("../assets/img/WeatherApp.png").default,
            gitHubRepo:"https://github.com/MrDawit/WeatherApp",
            deployURL:"https://MrDawit.github.io/WeatherApp",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 5
        },
        {
           
            name: "Scheduler",
            descriptionShort: "An App organizing your tasks using localStorage",
            imageURL: require("../assets/img/Scheduler.png").default,
            gitHubRepo:"https://github.com/MrDawit/Scheduler",
            deployURL:"https://MrDawit.github.io/Scheduler",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 6
        },
        {
            
            name: "Google-Books",
            descriptionShort: "A REACT app saving your library of books to buy or find info on",
            imageURL: require("../assets/img/google_books.png").default,
            gitHubRepo:"https://github.com/MrDawit/Google-Books",
            deployURL:"https://google-books-hmwk.herokuapp.com/",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 7
        },
        {
            
            name: "Code Quiz: Basketball (Laker's Edition!)",
            descriptionShort: "Quiz/Tribute App for Kobe 'Bean' Bryant",
            imageURL: require("../assets/img/Code_Quiz.png").default,
            gitHubRepo:"https://github.com/MrDawit/Code-Quiz",
            deployURL:"https://mrdawit.github.io/Code-Quiz/index.html",
            skills: "React, CSS, REST API, BLK systems framework, Bootstrap",
            id: 8
        }
       

 

]); 

    return(
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}
