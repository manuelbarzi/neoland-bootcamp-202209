function searchVehicles(query, callback) {
    // TODO validate inputs

    var xhr = new XMLHttpRequest
    
    // response handling
    xhr.onload = function() {
        var json = xhr.responseText
    
        var results = JSON.parse(json)
        
        callback(results)
    }
    
    // request handling
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)
    
    xhr.send()
}

searchVehicles('simpsons', console.log)

searchVehicles('hulk', vehicles => {
    var ul = document.createElement('ul')
    
    vehicles.forEach(vehicle => {
        var li = document.createElement('li')

        var h2 = document.createElement('h2')
        h2.innerText = `${vehicle.name} (${vehicle.id})`
        
        var img = document.createElement('img')
        img.src = vehicle.thumbnail

        var p = document.createElement('p')
        p.innerText = vehicle.price

        li.append(h2, img, p)

        ul.append(li)
    })

    document.body.append(ul)
})

