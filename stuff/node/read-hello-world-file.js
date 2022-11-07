const fs = require('fs') // { readFile: ..., writeFile: ..., ...}

fs.readFile('./hello-world.js', 'utf8', (error, content) => {
    if (error) {
        console.log(error.message)

        return
    }

    console.log(content)
})

console.log(':)')