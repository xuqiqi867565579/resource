const multer  = require('multer');
const fs = require('fs');
const upload = multer(); //生成处理文件的中间件对象
const path = require('path');
const publicPath = path.join(__dirname,'../public/img');
const mimeTypes = require('../mimeTypes.js');
const uploadFile = (req,res,next) => {
    const {mimetype,buffer} = req.file;
    // 判断文件类型
    const type = mimeTypes[mimetype];
    const filePath = `/${new Date().getTime()}${type}`;
    fs.writeFileSync(path.join(publicPath,filePath),buffer);
    res.writeHead(200,{
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
        url: filePath,
        code: 1
    }));
}
module.exports = [upload.single('pic'),uploadFile];