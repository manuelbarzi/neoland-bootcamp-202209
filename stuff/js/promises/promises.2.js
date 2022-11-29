new Promise((resolve, reject) => {
    //resolve(10)
    reject(20)
})
    .then(success => {
        console.log(success)
    })
    .catch(fail => {
        console.error(fail)
    })
    
VM4929:9 20