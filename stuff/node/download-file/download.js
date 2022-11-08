// TODO $ node download http://212.183.159.230/1GB.zip 1gb.zip

const { get } = require('http')
const { createWriteStream } = require('fs')

const [, , from, to] = process.argv

get(from, res => {
    const ws = createWriteStream(to)

    res.pipe(ws)

    ws.on('finish', () => console.log('downloaded'))
})

