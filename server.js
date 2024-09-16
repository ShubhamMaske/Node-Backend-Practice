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

    //------------------------------//
    //copy big file into another file

    const readStream = fs.createReadStream('sample.txt')
    const writeStream = fs.createWriteStream('output.txt')

    readStream.on('data', (chunkData) => {
        console.log('chunk: ', chunkData.toString())

        writeStream.write(chunkData)
    })

    //----------------------------------//

    // string Processing
    const sampleStream = fs.createReadStream('sample.txt')

    const outputWritableStream = fs.createWriteStream('proceedString.txt')

    sampleStream.on('data', (chunk) => {
        console.log('data received: ', chunk.toString())

        // processing
        const upperCaseStream = chunk.toString().toUpperCase()

        const finalStream = upperCaseStream.replaceAll(/ipsum/gi, 'shubh')

        //writable stream
        outputWritableStream.write(finalStream)
    })

    // ---------------------------------//
    res.end()
})

const PORT = process.env.PORT || 4000

server.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})