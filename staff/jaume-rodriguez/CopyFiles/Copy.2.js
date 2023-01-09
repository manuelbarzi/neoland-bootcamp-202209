const { readFile, writeFile } = require('fs')

const { argv: [, , from, to], memoryUsage } = process

console.log('before read', memoryUsage())

readFile(from, (error, content) => {
    if (error) {
        console.error(error.message)

        return
    }

    console.log('after read, before write', memoryUsage())

    writeFile(to, content, error => {
        if (error) {
            console.error(error.message)

            return
        }

        console.log('after write', memoryUsage())
    })
})