const { createServer } = require('http')
const { readFile } = require('fs')
const parseQueryString = require('./utils/parseQueryString')

const api = createServer((req, res) =>{
    readFile('db.json', 'utf8', (error, json)=>{
        if(error){
            res.writeHead(500,{ 'content-type': 'application/json' })

            res.end(`{ "error": ${error.message} }`)

            return
        }
        const { q } = parseQueryString(req.url)

        
        const data = JSON.parse(json)
        
        const userRetrieve = data.filter(item=>{
            return item.name.includes(q) || item.surname.includes(q) || 
            item.email.includes(q) || item.phone.includes(q)
        })
        
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(userRetrieve)) 
    })
})

api.listen(8080)

console.log('Server runing on port 8080')
