const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, content) => {
    if (err) {
        console.log(err.message)
        return
    } 

    fs.writeFile(process.argv[3], content, (err) => {
        if (err) {
            console.log(err.message)
        }
    }) 
})


// VERSION 2------

// const {readFile, writeFile} = require ('fs')

// const [, , from, to] = process.argv

// readFile(from, (err, content) => {
//     if (err) {
//         console.log(err.message)
//         return
//     } 

//     writeFile(to, content, (err) => {
//         if (err) {
//             console.log(err.message)
//             return
//         }
//     }) 
// })