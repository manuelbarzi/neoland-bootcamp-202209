const scrapeCats = require('./logic/scrapeCats')
const { writeFile } = require('fs')

const dataCollector = (error, results) => {
    if (error) {
        console.error(error)

        return
    }

    const json = JSON.stringify(results, null, 4)

    const dataTranscribed = error => {
        if (error)
            console.error(error)
    }
    writeFile('./data/cats.json', json, dataTranscribed)
}
scrapeCats(dataCollector)