function changeRequest(data){
    return data;
}
function changeRequest1(data){
    return JSON.stringify(data);
}
axios.interceptors.request.use((config) => {
    console.log(config);
    return {...config};
})
/**
 * axios方法测试与掌握
 */
axios({
    // 请求配置
    url: '/addStudentList',
    method: 'POST', // 默认是get
    baseUrl: 'http://localhost:3000/', // 自动添加到url的前边，除非url是一个绝对路径
    headers:{ // 设置请求头
        'Content-Type': 'application/json'
    },
    data: {   // 作为请求主体被发送的数据
        studentInfo:{name: '张三', age: 12}
    },
    transformRequest: [ // 数组中的函数在发送数据前依次执行，能修改请求数据,函数的返回值最终会把返回值作为send函数的参数
        changeRequest,
        changeRequest1
    ] 
}).then(response => {
    console.log(response);
});
