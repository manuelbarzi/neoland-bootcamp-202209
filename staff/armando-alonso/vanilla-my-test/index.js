log("INFO", "Comenzamos la web");

let user = ''

const head = document.querySelector("head");

const stylesheetOne = document.createElement('link');
stylesheetOne.href = "index.css";
stylesheetOne.rel = "stylesheet";

const stylesheetTwo = document.createElement('link');
stylesheetTwo.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
stylesheetTwo.rel = "stylesheet";

head.append(stylesheetOne, stylesheetTwo);

document.body.append(loginPage);
 


