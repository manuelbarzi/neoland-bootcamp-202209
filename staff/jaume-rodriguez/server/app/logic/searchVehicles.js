function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        var json = xhr.responseText
        var results = JSON.parse(json)

        callback(null, results)
    }

    xhr.onerror = () => callback(new Error('Server Error'))
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)
    xhr.send()
}