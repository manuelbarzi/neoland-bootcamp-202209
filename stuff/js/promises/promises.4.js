new Promise((resolve, reject) => {
    //resolve(10)
    //reject(20)

    throw 30
})
    .then(success => {
        console.log(success)
    })
    .catch(fail => {
        console.error(fail)
    })
    
VM5179:11 30