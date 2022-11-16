const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
if(err) {
    
    console.error(err)

    return
} 

    fs.writeFile(process.argv[3], data, (err) => {
        if(err)
        console.log(err)
    })
  
})