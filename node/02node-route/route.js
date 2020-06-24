
var file = require('./file')
module.exports = {
    login: function (req, res) {
        res.write('这是登录页');
    },
    register: function (req, res) {
        res.write('这是注册页');
    },
    home: function (req, res) {
        file.readFile('./view/index.html', res)
    },
    img: function (req, res) {
        file.readImg('./01.jpg', res)
    },
}