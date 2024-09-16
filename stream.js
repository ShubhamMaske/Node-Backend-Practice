const { Readable, Writable } = require('stream')

//creating custom stream

const readableStream = new Readable({
    highWaterMark: 10,
    read() {}
}); // this obj is compulsory to given

const writableStream = new Writable({
    write(data) {
        console.log('writting: ',data)
    }
}); 
// writableStream.write("Hello")


readableStream.on('data', (chunk) => {
    console.log('data input : ',chunk)
    writableStream.write(chunk)
})

console.log(readableStream.push('Hello my name is Shubham'))




