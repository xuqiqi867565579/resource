# 设计模式

## 中间件模式

让中间件（函数）能够依次执行（前一个函数执行结束，通知后一个函数执行）；

```js
const arrFn = [];
function use(fn){ 
    arrFn.push(fn);
}
function run(){
    let index = 0;
    function next(){
        arrFn[++index](next);
    }
    arrFn[index](next);
}
```