const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    if(req.url != '/'){
        return res.end()
    }

    //bad way
    // const file = fs.readFileSync('sample.txt');

    //good way of reading large file
    const readableStream = fs.createReadStream('sample.txt')

    readableStream.pipe(res)

    //---------------------
    //copy big file into another file

    const readStream = fs.createReadStream('sample.txt')
    const writeStream = fs.createWriteStream('output.txt')

    readStream.on('data', (chunkData) => {
        console.log('chunk: ', chunkData.toString())

        writeStream.write(chunkData)
    })

    //------------------------
    res.end()
})

const PORT = process.env.PORT || 4000

server.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})