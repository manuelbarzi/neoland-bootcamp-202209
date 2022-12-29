function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')// validaciones 
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest // se crea un conector(xhr) para comunicarte con un servidor(XMLHttpRequest)

    xhr.onload = () => {// evento que se produce cuando se recibe una respuesta, esta se guarda en el xhr
        var json = xhr.responseText// la respuesta es un json 

        var results = JSON.parse(json) //lo convierto a objeto 

        callback(null, results) // si no hay error envio un null y luego el resultado
    }
   //manejo de errores, el primer lugar se reserva para el manejo de errores
    xhr.onerror = () => callback(new Error('server error'))
   //open abre la coneccion, GET significa dame datos y luego el link al cual se los pide 
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

    xhr.send() // envio la peticion 
}