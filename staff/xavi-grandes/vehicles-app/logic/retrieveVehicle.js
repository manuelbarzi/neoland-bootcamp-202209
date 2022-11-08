function retrieveVehicle(vehicleId, callback) {
    if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest
        
    xhr.onload = () => {
        var json = xhr.responseText
        // indico como quiero manejar la respuesta del servidor
    
        var result = JSON.parse(json)
        // le indico que quiero que el json en string se descodifique 
        
        callback(null, result)
    }

    xhr.onerror = () => callback(new Error('server error'))
    
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)
    // he preparado la conenxión con GET al servidor y el query será el texto de busqueda que introduzca en el buscador
    
    xhr.send()
    // le digo que envíe la petición
}