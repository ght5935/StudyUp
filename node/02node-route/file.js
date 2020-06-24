const fs = require('fs');

module.exports = {
    readFile: function (file, res) {
        fs.readFile(file, 'utf-8', (err, data) => {
            res.statusCode = 200
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write(data)
            res.end()
        })
    },
    readImg: function (file, res) {
        // 图片采用二进制
        fs.readFile(file, 'binary', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'images/jpeg' });
            res.write(data, 'binary')
            res.end()
        })
    }

}