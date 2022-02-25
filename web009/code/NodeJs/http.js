const http = require('http')
const server = http.createServer((req,res)=>{
    res.write('11133322211')
    res.end()
})
server.listen(8080)
