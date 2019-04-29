const {readStudent,writeStudent} = require('./common');
exports.delStudentList = () => {
    return (req, res, next) => {
        const {index} = req.body;
        let studentList = readStudent();
        studentList.splice(index);
        writeStudent(studentList);
        res.send({
            msg: 'ok',
            code: 1
        })
    }
}