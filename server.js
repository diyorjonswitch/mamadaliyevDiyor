const http = require("http")
const server  =  http.createServer((require, request) => {
    let method = require.method
})
server.listen(9000, () => console.log("ishladi"))