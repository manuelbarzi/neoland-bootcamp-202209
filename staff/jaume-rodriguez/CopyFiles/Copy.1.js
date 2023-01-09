// JAUME VERSION

const fs = require('fs')

const a = process.argv[2]
const b = process.argv[3]


fs.copyFile(a, b, (error) => {
    if (error) {
        console.log(error.message)

        return
    }

})

console.log('File Copied')