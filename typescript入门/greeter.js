var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*基本数据类型的声明 */
var myName = 'wang';
var myAge = 23;
var myBool = true;
var myUnde = undefined;
var myNull = null;
/**数组的声明
 * 1. Array<元素类型>
 * 2. 元素类型[]
 */
var arr = [2, 3, 4];
var newArr = [3, 4, 5];
/**
 * 元组的声明
 * 元组：已知数量和元素类型的数组，数组内元素的类型可以不同
 * [元素类型,元素类型]
 */
var tuple = ['hello', 34];
/**
 * 枚举类型
 * 用于给一组数值赋予友好的名字
 * enum Color{a,b,c} =>  Color = {a:0,b:1,c:2,0:'a',1:'b',2:'c'}
 * 默认从0开始编号，也可以手动赋值
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 9] = "Red";
    Color[Color["Gree"] = 3] = "Gree";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
console.log(Color);
var c = Color.Red;
console.log(c);
/**any
 * Object
 * never
 * void
 * */
var a = 'a';
var b = undefined;
function add(a, b) {
    return a + b;
}
var person = {
    name: '哈哈哈',
    age: 78
};
var dis = function (a, b) {
    return a + b;
};
dis(1, 2);
/**
 * class
 *
 *
 */
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'taotao';
    }
    Animal.prototype.sayName = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sayName = function () {
        _super.prototype.sayName.call(this);
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.sayName();
