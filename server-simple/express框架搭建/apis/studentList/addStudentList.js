const {readStudent,writeStudent} = require('./common');
exports.addStudentList = () => {
    return (req,res,next) => {
        const {studentInfo} = req.body;
        let studentList = readStudent();
        studentList.push(studentInfo);
        writeStudent(studentList);
        res.send({
            msg: '添加成功',
            code: 1
        });
    }
}