var { XMLHttpRequest } = require("xmlhttprequest")
var { JSDOM } = require('jsdom')

var q = 'simpsons'

var xhr = new XMLHttpRequest

// res
xhr.onload = () => {
    var html = xhr.responseText

    var dom = new JSDOM(html)

    var doc = dom.window.document

    var boxes = doc.querySelectorAll('.Thumbnail_container__V0mxR')

    var results = []

    boxes.forEach(box => {
        var backgroundImage = box.querySelector('.Thumbnail_image__ucHEX').style.backgroundImage

        var imageUrl = 'https://http.cat/' + backgroundImage.substring(5, backgroundImage.length - 2)

        var result = { imageUrl } // code, text
        results.push(result)
    })

    console.log(JSON.stringify(results))

    // TODO save results in db.json (in json format)
}

// req
xhr.open('GET', 'https://http.cat')
xhr.send()