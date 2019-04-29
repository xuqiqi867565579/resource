const {readStudent} = require('./common');
exports.getStudentList = () => {
    return (req, res, next) => {
        let studentList = readStudent();
        res.send({
            msg: 'ok',
            code: 1,
            data: studentList
        })
    }
}