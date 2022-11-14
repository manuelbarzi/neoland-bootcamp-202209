var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const jsdom = require("jsdom");

var q = 'nba'
var xhr = new XMLHttpRequest();

xhr.onload = () => {
    var html = xhr.responseText

    // var parser = new DOMParser
    // var doc = parser.parseFromString(html, 'text/html')

    const { JSDOM } = jsdom;
    // const JSDOM = jsdom.JSDOM

    const dom = new JSDOM(html)

    // const { document: doc } = dom.window
    // const { window: { document: doc } } = dom
    const doc = dom.window.document
    debugger

    console.log(doc.body)

    var titles = doc.querySelectorAll('.LC20lb.MBeuO.DKV0Md')

    var results = []

    titles.forEach(title => {
        var text = title.innerText
        var url = title.parentElement.href

        var result = { text, url }
        results.push(result)        
    })

    console.log(results)
}

// req
xhr.open('GET', `https://www.google.com/search?q=${q}`)
xhr.send()