const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    if(req.url != '/'){
        return res.end()
    }

    //bad way
    const file = fs.readFileSync('sample.txt')
    
    
    return res.end(file)
})

const PORT = process.env.PORT || 4000

server.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})