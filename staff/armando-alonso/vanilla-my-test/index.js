log("INFO", "Comenzamos la web");

var user = ''

var head = document.querySelector("head");

var stylesheetOne = document.createElement('link');
stylesheetOne.href = "index.css";
stylesheetOne.rel = "stylesheet";

var stylesheetTwo = document.createElement('link');
stylesheetTwo.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
stylesheetTwo.rel = "stylesheet";

head.append(stylesheetOne, stylesheetTwo);

document.body.append(loginPage);



