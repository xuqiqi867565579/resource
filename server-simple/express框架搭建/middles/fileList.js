const path = require('path');
const fs = require('fs');
const url = require('url');
let rootDir = path.join(__dirname,'../public');
module.exports = (req,res,next)=>{
    req.oUrl = url.parse(req.url);
    let dirPath = path.join(rootDir,req.oUrl.pathname);
    if(fs.existsSync(dirPath)){
        if(fs.statSync(dirPath).isDirectory()){
            let fileList = fs.readdirSync(dirPath);
            let oFile = {};
            oFile.arr = fileList.map(item=>{
                return {
                    url:path.join(req.oUrl.pathname,item),
                    path:path.join(dirPath,item),
                    name: item
                };
            });
            res.render('list',oFile);
            return;
        }else{
            next();
        }
    }else{
        next();
    }

}