const { createReadStream, createWriteStream } = require('fs')

const { argv: [, , from, to], memoryUsage } = process

console.log('before stream', memoryUsage())

const rs = createReadStream(from)
const ws = createWriteStream(to)

rs.on('data', chunk => ws.write(chunk))

rs.on('end', () => ws.end())

ws.on('finish', () => console.log('after stream', memoryUsage()))