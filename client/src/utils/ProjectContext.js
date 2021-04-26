import React, {useState, createContext} from "react";


export const ProjectContext = createContext()

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
        
        {
            
            name: "The ToolShed",
            description_short: "A REACT app to help users not lose their tools!",
            imageURL: require("../assets/img/toolshed.png").default,
            GitHubRepo:"https://github.com/Elli360/Project3",
            deployURL:"https://toolshed-app-team8.herokuapp.com/",
            loginInfo:"none",
            id: 1
        },
        {
           
            name: "Covid19 Info",
            description_short: "Covid-19 high level statistics dashboard.",
            imageURL: require("../assets/img/covid19_info.png").default,
            GitHubRepo:"https://github.com/troylochner/covid19-info",
            deployURL:"https://troylochner.github.io/covid19-info/",
            loginInfo:"none",
            id: 2
        }, 
        {
           
            name: "Recipe Tracker",
            description_short: "App to organize your recipes",
            imageURL: require("../assets/img/main.png").default,
            GitHubRepo:"https://github.com/lcalderin12/Recipe-Tracker",
            deployURL:"https://recipes-tracker-hanzee.herokuapp.com/",
            loginInfo:"<span id='loginInfoTitle'>Login Info</span>= <span id='loginInfoLabel'>Email:</span> Shalom.Dawit@gmail.com <span id='loginInfoLabel'>Password:</span> food",
            id: 3
        }, 
        {
           
            name: "All U Can Burger",
            description_short: "App to organize your burger diet using express handlebars",
            imageURL: require("../assets/img/AllUCanBurger.png").default,
            GitHubRepo:"https://github.com/MrDawit/All-U-Can-Burger",
            deployURL:"https://all-u-can-burger.herokuapp.com/",
            loginInfo:"none",
            id: 4
        },
        {
            
            name: "WeatherApp",
            description_short: "An App giving weather forecast details to a location of choice",
            imageURL: require("../assets/img/WeatherApp.png").default,
            GitHubRepo:"https://github.com/MrDawit/WeatherApp",
            deployURL:"https://MrDawit.github.io/WeatherApp",
            loginInfo:"none",
            id: 5
        },
        {
           
            name: "Scheduler",
            description_short: "An App organizing your tasks using localStorage",
            imageURL: require("../assets/img/Scheduler.png").default,
            GitHubRepo:"https://github.com/MrDawit/Scheduler",
            deployURL:"https://MrDawit.github.io/Scheduler",
            loginInfo:"none",
            id: 6
        },
        {
            
            name: "Google-Books",
            description_short: "A REACT app saving your library of books to buy or find info on",
            imageURL: require("../assets/img/google_books.png").default,
            GitHubRepo:"https://github.com/MrDawit/Google-Books",
            deployURL:"https://google-books-hmwk.herokuapp.com/",
            loginInfo:"none",
            id: 7
        },
        {
            
            name: "Code Quiz: Basketball (Laker's Edition!)",
            description_short: "Quiz/Tribute App for Kobe 'Bean' Bryant",
            imageURL: require("../assets/img/Code_Quiz.png").default,
            GitHubRepo:"https://github.com/MrDawit/Code-Quiz",
            deployURL:"https://mrdawit.github.io/Code-Quiz/index.html",
            loginInfo:"none",
            id: 8
        }
       

 

]); 

    return(
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}
