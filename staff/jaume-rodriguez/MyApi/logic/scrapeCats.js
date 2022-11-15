var { XMLHttpRequest } = require("xmlhttprequest")
var { JSDOM } = require('jsdom')

function scrapeCats(callback) {
    const xhr = new XMLHttpRequest

    // res
    xhr.onload = () => {
        var html = xhr.responseText
        var dom = new JSDOM(html)
        var doc = dom.window.document

        var boxes = doc.querySelectorAll('.Thumbnail_container__V0mxR')
        var results = []

        boxes.forEach(box => {

            const backgroundImage = box.querySelector('.Thumbnail_image__ucHEX').style.backgroundImage
            const imageUrl = 'https://http.cat/' + backgroundImage.slice(5, -1)
            const code = box.querySelector(".Thumbnail_title__RZPuS").textContent;
            // const text = box.querySelector(".Thumbnail_content__YPxza > p").textContent;
            const text = box.querySelector("p").textContent;

            var result = { imageUrl, code, text }
            results.push(result)
        })

        callback(null, results)
    }
    xhr.onerror = () => callback(new Error('connection error'))

    // req
    xhr.open('GET', 'https://http.cat')
    xhr.send()
}
module.exports = scrapeCats