log("INFO", "start app");

var users = [
  { name: "Pepito Grillo", email: "pepito@grillo", password: "123456789" },
  { name: "arman", email: "arman@grillo", password: "12345" },
  { name: "paco", email: "paco@grillo", password: "123456" },
  { name: "pepe", email: "pepe@grillo", password: "1234567" },
  { name: "juan", email: "juan@grillo", password: "1234" },
  { name: "mario", email: "mario@grillo", password: "12345678" },
  { name: "jose", email: "jose@grillo", password: "123" },
];

var head = document.querySelector("head");

var link = document.createElement("link");
link.href = "index.css";
link.rel = "stylesheet";
link.type = "text/css";

head.append(link);

var body = document.querySelector("body");
body.classList.add("container");

document.body.append(loginPage);


