
/*
柯里化是什么：是指这样一个函数，它接收函数 A，并且能返回一个新的函数，这个新的函数能够处理函数 A 的剩余参数
*/

function createCurry(func, args) {
    var argity = func.length;
    var args = args || [];

    return function () {
        var _args = [].slice.apply(arguments);
        args.push(..._args);

        if (args.length < argity) {
            return createCurry.call(this, func, args);
        }

        return func.apply(this, args);
    }
}
