var xhr = new XMLHttpRequest

// response handling
xhr.onload = function() {
    var json = xhr.responseText

    var results = JSON.parse(json)
    
    console.log(results)
}

// request handling
xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=mario')

xhr.send()

undefined
VM1298:9 (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]