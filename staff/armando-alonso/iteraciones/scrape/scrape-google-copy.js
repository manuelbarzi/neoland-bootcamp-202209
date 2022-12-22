var { XMLHttpRequest } = require("xmlhttprequest")
const { JSDOM } = require("jsdom");
const { writeFile } = require("fs");

// var q = 'simpsons'

var xhr = new XMLHttpRequest

// res
xhr.onload = () => {
    var html = xhr.responseText

    const dom = new JSDOM(html)

    const doc = dom.window.document

    var boxes = doc.querySelectorAll('.StyledCardWrapper-sc-1j5kbg6-0.cOnriV')


    var results = [];

    boxes.forEach(box => {
        // var imageUrl = box.querySelector('picture > img').src

        // var imageUrl = 'https://http.cat/' + backgroundImage.substring(5, backgroundImage.length -2)

        // var code = box.querySelector('span').textContent

        var text = box.querySelector('p').textContent

        var result = { text }
        results.push(result)

    });

    const json = JSON.stringify(results, null, 4);

    writeFile("dbb.json", json, (error) => {
        if (error) {
            console.log('writeFile failed');
        } else {
            console.log('Success!!!');
        }
    });
};

// req
xhr.open('GET', `https://www.mediamarkt.es/es/campaign/destacados-telefonia`)
xhr.send()