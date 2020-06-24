const http = require('http');
const url = require('url');
const pathRoute = require('./route');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // 读取图片
    res.writeHead(200, { 'Content-Type': 'images/jpeg' })
    const pathname = url.parse(req.url).pathname.replace(/\//, '');
    if (req.url != './favicon.ico') {
        try {
            pathRoute[pathname](req, res)
        } catch (err) {
            pathRoute['home'](req, res)
        }
        // 图片渲染到页面时，需内部声明end
    }
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
}) 