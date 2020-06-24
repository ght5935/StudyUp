
const http = require('http')
const url = require('url')
const pathRoute = require('./route')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.url != './favicon.ico') {
        // 获取pathname
        let pathname = url.parse(req.url).pathname.replace(/\//, '');
        try {
            pathRoute[pathname](req, res)
        } catch (err) {
            pathRoute['home'](req, res)
        }
        // res.write(pathname)
        res.end()
    }
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
}) 