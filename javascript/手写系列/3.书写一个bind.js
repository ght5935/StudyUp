

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('this is not function')
    }
    let that = this
    let args = [...arguments].slice(1)
    return function Fn() {
        // 判断是否被当做构造函数使用
        if (this instanceof Fn) {
            return that.apply(this, args.concat([...arguments]))
        } else {
            return that.apply(context, args.concat([...arguments]))
        }
    }
}

let obj = {
    name: '小菜'
}
function foo(a, b, c) {
    return {
        name: this.name,
        a,
        b,
        c
    }
}
foo.myBind(obj, 1, 2, 3)();
console.log(foo.myBind(obj, 1, 2, 3)())
console.log(foo.bind(obj, 1, 2, 3)())