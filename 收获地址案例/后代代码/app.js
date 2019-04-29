const Koa = require('koa');
const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const app = new Koa();
const koaBody = require('koa-body');
function readAddress(){
    let addressData = fs.readFileSync(path.join(__dirname,'./address.json'),'utf-8');
    return JSON.parse(addressData);
}
function writeAddress(data){
    fs.writeFileSync(path.join(__dirname,'./address.json'),data,'utf-8');
}
// 获取地址
router.get('/addressList',(context,next)=>{
    let addressData = readAddress();
    context.body = {msg:'数据获取成功',code:1,data:addressData}
});
// 添加地址
router.post('/addAddress',(ctx,next)=>{
    let {address} = ctx.request.body;
    
    console.log(address);
    let addressData = readAddress();
    addressData.push(address);
    writeAddress(JSON.stringify(addressData));
    ctx.body = {msg:'添加成功',code:1}
});
// 更新地址
router.post('/updateAddress',(ctx,next)=>{
    let {address,index} = ctx.request.body;
    let addressData = readAddress();
    addressData[index] = {...addressData[index],...address}
    writeAddress(JSON.stringify(addressData));
    ctx.body = {msg:'更新成功',code:1}
    
})
// 删除地址
router.post('/delAddress',(ctx,next)=>{
    let {index} = ctx.request.body;
    let addressData = readAddress();
    addressData.splice(index,1);
    writeAddress(JSON.stringify(addressData));
    ctx.body = {msg:'删除成功',code:1}
})
app.use(async (ctx,next)=>{
    let startTime = new Date().getTime();
    await next();
    let endTime = new Date().getTime();
    let dis = endTime - startTime;
    console.log(`本次请求的地址为 ${ctx.path},请求的方法为${ctx.method},请求的时间为${dis}ms`);
})
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(7000,()=>{
    console.log('服务已经成功的运行在localhost:7000上');
});