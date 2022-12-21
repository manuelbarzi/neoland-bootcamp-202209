const { XMLHttpRequest } = require("xmlhttprequest")
const { JSDOM } = require('jsdom')

const xhr = new XMLHttpRequest

// res
xhr.onload = () => {
    const html = xhr.responseText

    const dom = new JSDOM(html)

    const doc = dom.window.document

    const boxes = doc.querySelectorAll('.Thumbnail_container__V0mxR')

    const results = []

    boxes.forEach(box => {
        const backgroundImage = box.querySelector('.Thumbnail_image__ucHEX').style.backgroundImage

        const imageUrl = 'https://http.cat/' + backgroundImage.substring(5, backgroundImage.length - 1)

        const result = { imageUrl } // code, text
        results.push(result)
    })

    console.log(JSON.stringify(results))

    // TODO save results in db.json (in json format)
}

// req
xhr.open('GET', 'https://http.cat')
xhr.send()