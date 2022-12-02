new Promise((resolve, reject) => {
    //resolve(10)
    reject(20)
})
    .then(success => {
        console.log(success)
    }, fail => {
        console.error(fail)
    })
    
VM4678:8 20