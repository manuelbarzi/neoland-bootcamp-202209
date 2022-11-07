function retrieveVehicle(vehicleId, callback) {
    if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        var json = xhr.responseText
    
        var result = JSON.parse(json)
        
        callback(null, result)
    }

    xhr.onerror = () => callback(new Error('server error'))
    
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)
    
    xhr.send()
}