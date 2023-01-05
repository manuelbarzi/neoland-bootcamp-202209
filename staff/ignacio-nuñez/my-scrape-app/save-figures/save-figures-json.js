const { writeFile } = require('fs')
const scrapeHttpCats = require('../logic/scrapeHttpCats.js')

scrapeHttpCats((error, results) => {
    if (error) {
        console.log(error)

        return
    }
    const json = JSON.stringify(results, null, 1)

    writeFile('db.json', json, error => {
        if (error)
            console.error(error.message)

        console.log('scrape finished')
    })
})






