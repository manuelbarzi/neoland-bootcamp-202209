const scrapeCats = require('./logic/scrapeCats')
const { writeFile } = require('fs')

scrapeCats((error, results) => {
    if (error) {
        console.error(error)

        return
    }

    const json = JSON.stringify(results, null, 4)

    writeFile('./db.json', json, error => {
        if (error)
            console.error(error)
    })
})