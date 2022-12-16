const { get } = require('http')
const { createWriteStream } = require('fs')

const [, , from, to] = process.argv

get(from, res => {
    const ws = createWriteStream(to)

    res.pipe(ws)

    ws.on('finish', () => console.log('downloaded'))
})