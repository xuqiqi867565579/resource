import axios from 'axios';
let host = '/todolist';
// 获取todolist列表
export function getAllList() {
  return axios.get(host + '/getAllList');
}
// 添加todolist
export function addTodo(text) {
  return axios.get(host + '/addList', {
    params: { text }
  });
}
