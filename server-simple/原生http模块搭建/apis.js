const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const jsonPath = path.join(__dirname,'./list.json');
const apis = {
    '/getAllList'(req,res){
        const jsonStr = fs.readFileSync(jsonPath,'utf-8');
        res.end(JSON.stringify({msg:'数据成功',code:1,data:jsonStr}));
    },
    /**
     * 
     * /addList
     * GET
     * {text:''}
     */
    '/addList'(req,res){
        let {text} = queryString.parse(req.oUrl.query);
        const jsonStr = fs.readFileSync(jsonPath,'utf-8');
        let oJson = jsonStr ? JSON.parse(jsonStr) : [];
        oJson.push({text});
        fs.writeFileSync(jsonPath,JSON.stringify(oJson),'utf-8');
        res.end(JSON.stringify({msg:'成功',code:1}));
    }
}

module.exports = apis;