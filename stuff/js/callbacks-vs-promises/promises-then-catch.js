new Promise(function(resolve, reject) {
    //resolve(10)
    reject(10)
})
    .then(function(data) {
        console.log(data)

        return 20
    })
    .then(function(data) {
        console.log(data)

        return 30
    })
    .then(function(data) {
        console.log(data)

        return 40
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.error(error)

        return 50
    })
    .then(function(data) {
        console.log(data)

        return 60
    })
    .then(function(data) {
        console.log(data)
    })
VM4364:24 10
(anonymous) @ VM4364:24
Promise.catch (async)
(anonymous) @ VM4364:23
VM4364:29 50
VM4364:34 60