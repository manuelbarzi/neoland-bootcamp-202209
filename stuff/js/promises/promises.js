new Promise((resolve, reject) => {
    //resolve(10)
    reject(20)

    //throw 30
})
    .then(success => {
        console.log(success)
    })
    .catch(fail => {
        console.error(fail)

        throw 40
    })
    .then(success => {
        console.log(success)
    })
    .catch(fail => {
        console.error(fail)
    })
    
VM5724:11 20
VM5724:19 40