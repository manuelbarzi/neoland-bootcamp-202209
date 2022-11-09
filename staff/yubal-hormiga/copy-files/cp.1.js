// TODO redo cp in node ($ cp helloworld.txt helloworld2.txt), to make it run like: $ node cp helloworld.txt helloworld2.txt    

// TIPS argv, readFile, writeFile 👀

const { readFile, writeFile } = require('fs')

const [, , from, to] = process.argv

readFile(from, (error, content) => {
    if (error) {
        console.error(error.message)

        return
    }

    writeFile(to, content, error => {
        if (error) {
            console.error(error.message)

            return
        }
    })
})