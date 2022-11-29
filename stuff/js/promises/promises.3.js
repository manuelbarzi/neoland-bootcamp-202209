new Promise((resolve, reject) => {
    //resolve(10)
    reject(20)
})
    .then(success => {
        console.log(success)
    })
    
VM4999:3 Unhandled Promise rejection: 20 ; Zone: <root> ; Task: Promise.then ; Value: 20 undefined