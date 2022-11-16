//NOTE run it from google page js console
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { title } = require("process")

var q = 'simpsons'

var xhr = new HMLHttpRequest

//res
xhr.onload = () => {
    var html = xhr.responseText

    // var parser = new DOMParser

    // var doc = parser.parseFromString(html, 'text/html')

    const { JSDOM }

     var titles = doc.querySelectorAll('.LC20lb.MBeuO.DKV0Md')

    var results = []
    
    title.forEach(title => {
        var text = title.innerText
        var url = title.parentElement.href

        var result = { text, url }
        results.push(result)
    })

console.log(results)

document.body.innerHTML = ''

var list = document.createElement('ul')

results.forEach(result => {
    var link = document.createElement('a')
    link.innerText = result.text
    link.href = result.url

    var item = document.createElement('li')
    item.append(link)

    list.append(item)
})

document.body.append(list)
}

xhr.open('GET', `https://www.google.com/search?q=${q}`)
xhr.send()
