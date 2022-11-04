function searchVehicle(idQuery, callback) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        var json = xhr.responseText
        var result = JSON.parse(json)

        callback(null, result)
    }

    xhr.onerror = () => callback(new Error('Server Error'))
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${idQuery}`)
    xhr.send()
}