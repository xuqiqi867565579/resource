/*基本数据类型的声明 */
let myName: string = 'wang';
let myAge: number = 23;
const myBool: boolean = true;
const myUnde: undefined = undefined;
const myNull: null = null;
/**数组的声明
 * 1. Array<元素类型>
 * 2. 元素类型[]
 */
const arr: Array<number> = [2,3,4];
const newArr: number[] = [3,4,5];

/**
 * 元组的声明
 * 元组：已知数量和元素类型的数组，数组内元素的类型可以不同
 * [元素类型,元素类型]
 */
const tuple: [string,number] = ['hello',34];

/**
 * 枚举类型
 * 用于给一组数值赋予友好的名字
 * enum Color{a,b,c} =>  Color = {a:0,b:1,c:2,0:'a',1:'b',2:'c'}
 * 默认从0开始编号，也可以手动赋值
 */
enum Color{Red=9,Gree=3,Blue=7}
console.log(Color);
let c: number = Color.Red;
console.log(c);
/**any 
 * Object
 * never
 * void    
 * */
const a: any = 'a';
const b: void = undefined;

function add(a: number,b: number): number{
    return a + b;
}


/**
 * 接口 ：定义对象的属性的数据类型
 * interface
 * 1. 可以描述对象的外形   
 * interface 接口名 {
 *  属性名？:string 可选
 *  readonly 属性名:number 只读
 *  [propName: string]: any   //可以接收不定数量的任意类型的属性
 * }
 */
interface personObj {
    name: string,
    age: number
}
const person: personObj = {
    name: '哈哈哈',
    age: 78
}

/**
 * interface定义函数
 * interface AddF{
 *  (a:number,b:number):number
 * }
 */
interface AddF{
    (a:number,b:number):number
}
let dis: AddF = function(a,b){
    return a + b;
}
dis(1,2);


/**
 * class 
 * public
 * protected
 * private
 * static
 * abstract 抽象类
 * 
 */
class Animal {
    name: string = 'taotao';
    sayName() {
        console.log(this.name)
    }
}
class Dog extends Animal{
    sayName(){
        super.sayName();
    }
}

let dog = new Dog();
dog.sayName();