const http = require('http');
const app = require('./app');
http.createServer(app).listen(3000,() => console.log('服务器成功的运行在http://localhost:3000上'));