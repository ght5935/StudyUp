

/* new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：

1.创建一个空的简单JavaScript对象（即{ } ）；
2.链接该对象（即设置该对象的构造函数）到另一个对象 ；
3.将步骤1新创建的对象作为this的上下文 ；
4.如果该函数没有返回对象，则返回this。

*/
/**
 *
 *
 */
function myNew() {
    // 1、获得构造函数，同时删除 arguments 中第一个参数
    let context = [].shift.call(arguments);
    // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    let obj = Object.create(context.prototype);
    // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    let ret = context.apply(obj, arguments);
    // 4、优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
}

/*
警告: 通过现代浏览器的操作属性的便利性，可以改变一个对象的 [[Prototype]] 属性, 这种行为在每一个JavaScript引擎和浏览器中都是一个非常慢且影响性能的操作，
使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 obj.__proto__ = ... 语句上, 它还会影响到所有继承来自该 [[Prototype]] 的对象，
如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()

—MDN
*/