function retrieveVehicle(vehicleId, callback) {
    if(typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if(typeof callback !== 'function') throw new TypeError('callback is not a function')
    // XHR permite hacer peticion(conectar) y obtener respuesta
    const xhr = new XMLHttpRequest

    xhr.onload = () => { //configuar como atender esa respuesta
        var json = xhr.responseText 
        // json(subconjunto de la notación literal de objetos de JavaScript) en forma de string, utilizado para enviar datos 

        var result = JSON.parse(json) // covierte ese json a objeto 
        // JSON.stringify -> te convierte un objeto en string 

        callback(null, result)
    }

    xhr.onerror = () => callback(new Error('server error'))

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)

    xhr.send()
}