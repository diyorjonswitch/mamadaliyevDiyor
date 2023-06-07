const http = require('http')
const data = require('./data.js')

http.createServer((request, response) => {
    const method = request.method
    const url = request.url
    const bookId = url.split('/')[2]

    if (method == 'GET') {
        if (url.split('/')[1] === 'books') {
            if (!bookId) {
                response.end(JSON.stringify(data))
                return
            }
            const book = data.find(e => e.id == bookId)

            if(!book) {
                response.writeHead(404, {
                    'content-type':'aplication/json'
                })
                response.end(JSON.stringify({
                    status: 404,
                    message: http.STATUS_CODES[404]
                }))
            }

            response.end(JSON.stringify(book))

            return
        }

        response.end("get method...")
    } else {
        response.end("modification method")
    }
})
    .listen(9000, () => {
        console.log('listening in port 9000...');
    })