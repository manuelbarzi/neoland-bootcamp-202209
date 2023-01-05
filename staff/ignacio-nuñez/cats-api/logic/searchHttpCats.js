const { readFile } = require('fs')

module.exports = function searchHttpCats(query, callback){
    // if (query.trim() === '') {

    //     return
    // }

    readFile('./data/cats.json', (err, data) => {
        if (err) {
            console.log(err)
    
            return
        }
        cats = JSON.parse(data)

        searchedCats = cats.filter(cat =>{
            return cat.codeStatus.includes(query) || cat.textStatus.includes(query)
        })

        callback(null, searchedCats)
    })
}