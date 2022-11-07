log("INFO", "Home Page");

const homePage = document.createElement("main");
homePage.className = "flex h-full w-full flex-col";

homePage.append(homeHeader, tasksPanel);
