const http = require('http');

const url = require('url');

const apis = require('./apis');
const server = http.createServer((req,res) => {
    const oUrl = url.parse(req.url);
    const {pathname} = oUrl;
    req.oUrl = oUrl;
    if(pathname in apis){
        apis[pathname](req,res);
    }else{
        res.end('/404');
    }

});
server.listen(3000,() => {
    console.log('服务运行在http://localhost:3000');
})