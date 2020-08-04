
Function.prototype.myApply = function (context) {
    // 挂载一个函数
    var context = context || window
    context.fn = this;
    // 执行该函数
    let args = arguments[1]
    let result;
    if (args) {
        result = context.fn(...args)
    } else {
        result = context.fn()
    }
    // 删除该函数
    delete context.fn;
    return result
}

function bar(a, b, c) {
    return {
        name: this.name,
        a, b, c
    }
}
var obj = {
    name: '小明'
}

bar.myApply(obj, ['1', '2', '3'])
console.log(bar.myApply(obj, ['1', '2', '3']))