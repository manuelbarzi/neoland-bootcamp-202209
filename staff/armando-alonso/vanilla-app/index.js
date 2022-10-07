log("INFO", "start app");

var sessionUser = null

var head = document.querySelector('head')


var link = document.createElement('link')
link.href = 'index.css'
link.rel = 'stylesheet'
link.type = 'text/css'

var secondLink =document.createElement('link')
secondLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
secondLink.rel = 'stylesheet'
secondLink.type = 'text/css'



head.append(link, secondLink);

var body = document.querySelector("body");
body.classList.add("container");

document.body.append(loginPage);


