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

    var boxes = doc.querySelectorAll('.Thumbnail_container__V0mxR')


    var results = [];

    boxes.forEach(box => {
        var backgroundImage = box.querySelector('.Thumbnail_image__ucHEX').style.backgroundImage

        var imageUrl = 'https://http.cat/' + backgroundImage.substring(5, backgroundImage.length -1)

        var code = box.querySelector('.Thumbnail_title__RZPuS').textContent

        var text = box.querySelector('.Thumbnail_content__YPxza > p').textContent

        var result = { imageUrl, code, text }
        results.push(result)

    });

    const json = JSON.stringify(results);

    writeFile("db.json", json, (error) => {
        if (error) {
            console.log('writeFile failed');
        } else {
            console.log('Success!!!');
        }
    });
};

// req
xhr.open('GET', `https://http.cat/`)
xhr.send()