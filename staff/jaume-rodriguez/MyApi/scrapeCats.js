var { XMLHttpRequest } = require("xmlhttprequest")
var { JSDOM } = require('jsdom')
const { writeFile } = require('fs')

var xhr = new XMLHttpRequest

// res
xhr.onload = () => {
    var html = xhr.responseText
    var dom = new JSDOM(html)
    var doc = dom.window.document

    var boxes = doc.querySelectorAll('.Thumbnail_container__V0mxR')
    var results = []

    boxes.forEach(box => {

        const backgroundImage = box.querySelector('.Thumbnail_image__ucHEX').style.backgroundImage
        const imageUrl = 'https://http.cat/' + backgroundImage.substring(5, backgroundImage.length - 2)
        const code = box.querySelector(".Thumbnail_title__RZPuS").textContent;
        // const text = box.querySelector(".Thumbnail_content__YPxza > p").textContent;
        const text = box.querySelector("p").textContent;

        var result = { imageUrl, code, text }
        results.push(result)
    })

    const json = JSON.stringify(results)

    writeFile('db.json', json, (error => {
        if (error) {
            console.log('writeFile Failed')
        } else {
            console.log('suceesss')
        }
    }));
}

// req
xhr.open('GET', 'https://http.cat')
xhr.send()