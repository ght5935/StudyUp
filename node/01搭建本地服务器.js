
const http = require('http')

const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.url != './favicon.ico') {
        res.end('哈喽~')
    }
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
})


// ①、首先我们需要请求node.js自带的http模块。并赋值给定义的变量http。

// ②、http模块提供了createServer函数,这个函数会返回一个对象，我们将返回的对象赋值给定义的变量server。

// ③、我们给createServer函数传入一个匿名函数。用来接收数据和响应数据。（req：接收到的数据。 res：响应数据）

// ④、其中res.setHeader(); 用于设置响应头部。 content-Type 响应数据内容的类型, 我们可以设置成( "text/html" )、( "text/json" ),( "text/plain" ) 等等

// ⑤、后面的charset=utf-8是解析方式，也可以不写，一般写在html文件的<meta charset="utf-8">

// ⑥、res.writeHead()。就是输入HTTP的状态值了。（关于HTTP状态问题，可以另外查看其他解答）；

// ⑦、res.write()。里可以写入响应内容了。

// ⑧、最后就是执行server对象的listen的方法，这个方法可以有个数值参数。指定这个HTTP服务器监听的端口号。server.listen(8080); 我们让他监听8080端口。当我们打开http://localhost:8080的时候，服务器就会接收数据，并且响应数据了。

// supervisor node热更新 用于监听地址的变化

// supervisor 01搭建本地服务器.js 