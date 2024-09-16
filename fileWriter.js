const fs = require('fs')


const writableStream = fs.createWriteStream('log.txt')

process.stdin.pipe(writableStream)

