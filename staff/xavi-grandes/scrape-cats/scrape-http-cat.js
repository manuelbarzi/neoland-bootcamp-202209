var { XMLHttpRequest } = require("xmlhttprequest");
var { JSDOM } = require("jsdom");
const { writeFile } = require("fs");

var xhr = new XMLHttpRequest();

// res
xhr.onload = () => {
  var html = xhr.responseText;

  var dom = new JSDOM(html);

  var doc = dom.window.document;

  // cojemos una nodeListOf (algo parecido a un array) de los divs que contienen cada gatito
  debugger;
  var boxes = doc.querySelectorAll(".Thumbnail_container__V0mxR");

  var results = [];

  boxes.forEach((box) => {
    var backgroundImage = box.querySelector(".Thumbnail_image__ucHEX").style
      .backgroundImage;

    var imageUrl =
      "https://http.cat/" +
      backgroundImage.substring(5, backgroundImage.length - 1);

    const code = box.querySelector(".Thumbnail_title__RZPuS").textContent;

    // const text = box.querySelector(".Thumbnail_content__YPxza > p").textContent;
                  // búscame el primer <p> del bloque scope
    const text = box.querySelector("p").textContent;

    var result = { imageUrl, code, text };
    results.push(result);
  });

  // combierte el objeto JSON en un string
  console.log(JSON.stringify(results));

  // guardo el string dentro de la const json
  const json = JSON.stringify(results); 

  writeFile("db.json", json, (error) => {
    if (error) {
      console.log("writeFile failed");
    } else {
      console.log("f~#5king.. success!!!!!");
    }
  });
};

// req
xhr.open("GET", "https://http.cat");
xhr.send();