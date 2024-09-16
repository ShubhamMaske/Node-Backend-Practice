const http = require('http')

const server = http.createServer((req, res) => {
    console.log("req comming ", req.url)
})

const PORT = process.env.PORT || 4000

server.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})