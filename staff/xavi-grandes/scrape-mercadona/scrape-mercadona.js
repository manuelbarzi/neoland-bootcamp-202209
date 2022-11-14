var { XMLHttpRequest } = require("xmlhttprequest");
var { JSDOM } = require("jsdom");
const { writeFile } = require("fs");

var xhr = new XMLHttpRequest();

xhr.onload = () => {
    var html = xhr.responseText;

    var dom = new JSDOM(html);

    var doc = dom.window.document;

    var boxes = doc.querySelectorAll(".product-cell__content-link");

    var results = [];

    boxes.forEach((box) => {
        var imageUrl = box.querySelector('img').src;
        var product = box.querySelector('h4').textContent;
        var price = box.querySelector('product-price__unit-price subhead1-b').textContent;

        var result = { imageUrl, product, price };
        results.push(result);
    })

    console.log(JSON.stringify(results));

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
xhr.open("GET", "https://tienda.mercadona.es/categories/112");
// xhr.open("GET", "https://tienda.mercadona.es/");
xhr.send();