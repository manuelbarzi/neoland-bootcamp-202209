log("INFO", "Home Page");

const homePage = document.createElement("main");
homePage.className = "container container--full container--content-start";

homePage.append(homeHeader, tasksPanel);
