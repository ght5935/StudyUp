
Function.prototype.myCall = function (context) {
    // 挂在一个fn函数
    var context = context || window;
    context.fn = this;
    // 执行该函数
    // console.log(arguments, 'call')
    let args = [...arguments].slice(1)
    // console.log(args, 'call')
    let result = context.fn(...args)
    // 删除该函数
    delete context.fn
    return result
}
var foo = {
    name: '嘿嘿',
}
function bar(a, b, c) {
    return {
        name: this.name,
        a,
        b,
        c
    }
}
bar.myCall(foo, '11', '22', '33')
console.log(bar.myCall(foo, '11', '22', '33'))