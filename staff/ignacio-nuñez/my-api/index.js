const { createServer } = require('http')
const { readFile } = require('fs')

function paseQueryString(url){
    const query = url.substring(2).split('&').reduce((params, item)=>{
        const [key, value] = item.split('=')

        params[key] = value

        return params
    }, {})

    return query
}

const api = createServer((req, res) =>{
    readFile('db.json', 'utf8', (error, json)=>{
        if(error){
            res.writeHead(500,{ 'content-type': 'application/json' })

            res.end(`{ "error": ${error.message} }`)

            return
        }
        const query = paseQueryString(req.url)

        res.writeHead(200, { 'content-type': 'application/json' })

        const data = JSON.parse(json)

        const userRetrieve = data.filter(db=>{
            return db.name.includes(query.name) || db.surname.includes(query.surname) || 
            db.email.includes(query.email) || db.phone.includes(query.phone)
        })

        res.end(JSON.stringify(userRetrieve)) 
    })
})

api.listen(8080)

console.log('Server runing on port 8080')
