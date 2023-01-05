const { readFile, writeFile } = require('fs')
const [, , from, to] = process.argv

readFile(from, (err, data) => {
    if (err) {
        console.log(err)

        return
    }
    writeFile(to, data, error => {
        if (error) {
            console.log(error)
            return
        }

    })
})
