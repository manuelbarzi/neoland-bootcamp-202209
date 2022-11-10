function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new Error('invalid query')
    if (typeof callback !== 'function') throw new Error('invalid callback')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const json = xhr.responseText

        const results = JSON.parse(json)

        callback(null, results)
    }

    xhr.onerror=()=> callback(new Error('server error'))

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

    xhr.send()
}