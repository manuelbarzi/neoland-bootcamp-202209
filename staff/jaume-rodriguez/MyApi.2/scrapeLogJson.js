const scrapeCats = require('./logic/scrapeCats')

scrapeCats((error, results) => {
    if (error) {
        console.error(error)

        return
    }

    const json = JSON.stringify(results, null, 4)

    console.log(json)
})