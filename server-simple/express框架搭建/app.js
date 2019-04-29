const express = require('express');
const uploadFile = require('./apis/uploadFile');
const path = require('path');
const app = express();
const fileList = require('./middles/fileList');
const bodyParser = require('body-parser');
const {getStudentList} = require('./apis/studentList/getStudentList');
const {addStudentList} = require('./apis/studentList/addStudentList');
const {delStudentList} = require('./apis/studentList/delStudentList');
app.set('views', path.join(__dirname, 'views')); // 设置查找模板的路径
app.set('view engine', 'ejs'); // 设置后端的模板引擎

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(fileList);
app.use(express.static(path.join(__dirname,'./public')));
app.post('/uploadFile',uploadFile);

//学生列表
app.get('/getStudentList', getStudentList()); // 获取学生数据
app.post('/addStudentList', addStudentList());  // 添加学生
app.post('/delStudentList', delStudentList()); // 删除学生
module.exports = app;