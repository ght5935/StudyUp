
/*
柯里化通常也称部分求值，其含义是给函数分步传递参数，每次传递参数后部分应用参数，
并返回一个更具体的函数接受剩下的参数，这中间可嵌套多层这样的接受部分参数函数，
直至返回最后结果
*/

function add() {
    // 用来缓存所有的arguments值  
    let args = [...arguments]
    // 新建fn函数实现柯里化 
    let fn = function () {
        // 如果参数为空，那么递归停止，返回执行结果
        if (arguments.length === 0) {
            return args.reduce((a, b) => a + b)
        } else {
            // 否则将参数保存到args里面，返回fn方法
            args.push(...arguments)
            return fn
        }
    }
    return fn
}
console.log(add(1, 2)(3)(4)(5, 6, 7)(9)())

/*
 * 因为currying函数里面使用arguments，所以currying不能使用箭头函数，
 *  箭头函数内部的arguments的用法与箭头函数内部的this差不多，它取的是上一级函数的arguments值。
 * 如果想用箭头函数，currying函数可以这样改动
 */

function add1() {
    // 用来缓存所有的arguments值  
    let args = [...arguments]
    // 新建fn函数实现柯里化 
    let fn = (...rest) => {
        // 如果参数为空，那么递归停止，返回执行结果
        if (rest.length === 0) {
            return args.reduce((a, b) => a + b)
        } else {
            // 否则将参数保存到args里面，返回fn方法
            args.push(...rest)
            return fn
        }
    }
    return fn
}
console.log(add1(1, 2)(3)(4)(5, 6, 7)(9)())

/**
 * 我们返回的fn函数还可以使用callee来实现，原理相同，但是严格模式下不能使用：
 */
function add2() {
    // 用来缓存所有的arguments值  
    let args = [...arguments]

    return function () {
        // 如果参数为空，那么递归停止，返回执行结果
        if (arguments.length === 0) {
            return args.reduce((a, b) => a + b)
        } else {
            // 否则将参数保存到args里面，返回方法
            args.push(...arguments)
            return arguments.callee
        }
    }
    return fn
}
console.log(add2(1, 2)(3)(4)(5, 6, 7)(9)())