const { XMLHttpRequest } = require("xmlhttprequest")
const { JSDOM } = require('jsdom')

const xhr = new XMLHttpRequest

module.exports = function scrapeHttpCats(callback) {
    xhr.onload = () => {
        console.log('scraping...')

        const html = xhr.responseText

        const dom = new JSDOM(html)

        const doc = dom.window.document

        const boxes = doc.querySelectorAll('.Thumbnail_container__V0mxR')

        const results = []

        boxes.forEach(box => {
            const backgroundImage = box.querySelector('.Thumbnail_image__ucHEX').style.backgroundImage
            const imageUrl = 'https://http.cat/' + backgroundImage.slice(5, -1)

            const codeStatus = box.querySelector('.Thumbnail_title__RZPuS').innerHTML

            const textStatus = box.querySelector('p').innerHTML


            const result = { imageUrl, codeStatus, textStatus }
            results.push(result)
   
        })

        callback(null, results)
    }

    xhr.onerror=()=>callback(new Error('server error'))

    console.log('connecting to http.cat...')
    xhr.open('GET', 'https://http.cat')

    xhr.send()
}

