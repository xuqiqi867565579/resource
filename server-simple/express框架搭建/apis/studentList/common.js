const path = require('path');
const fs = require('fs');
const studentListPath = path.join(__dirname,'./studentList.json');
exports.readStudent = () => {
    return JSON.parse(fs.readFileSync(studentListPath,'utf-8') || '[]') || [];
}
exports.writeStudent = (data) => {
   fs.writeFileSync(studentListPath,JSON.stringify(data),'utf-8'); 
}



