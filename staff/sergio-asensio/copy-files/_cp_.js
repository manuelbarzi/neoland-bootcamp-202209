// TODO redo cp in node ($ cp helloworld.txt helloworld2.txt), to make it run like: $ node cp helloworld.txt helloworld2.txt    

// TIPS argv, readFile, writeFile

const fs = require('fs')

fs.readFile('helloworld.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error.message)

        return
    }

    fs.writeFile('helloworld2.txt', data , (error) => {
        if (error) {
            console.log(error.message)

            return
        }

    })


})