function detailVehicle(vehicleId, callback) {
    if (typeof vehicleId !== 'string') throw new Error('invalid query')
    if (typeof callback !== 'function') throw new Error('invalid callback')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const json = xhr.responseText

        const result = JSON.parse(json)

        callback(null, result)
    }

    xhr.onerror=()=> callback(new Error('server error'))

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)

    xhr.send()
}