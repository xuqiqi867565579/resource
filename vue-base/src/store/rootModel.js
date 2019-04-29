/**
 * 根模块
 */

import {
  getAllList, //请求所有数据列表的接口
  addTodo, // 添加单条待办事项
} from '../services/todolist';

export default {
  // dva state
  // 存储数据
  state: {
    todolist: [],
    sex: 1,
  },
  // 类似于compouted
  // 派生state中的数据
  getters: {
    showSex(state) {
      return state.sex === 1 ? '男' : '女';
    },
  },
  // dva reducers
  // 修改state中的数据
  mutations: {
    addTodoList(state, action) {
      state.todolist.push(action.todo);
    },
    initTodoList(state, action) {
      state.todolist = action.todolist;
    },
  },
  // dva effects
  // 处理异步请求
  actions: {
    async getAllList({ commit }) {
      const result = await getAllList();
      console.log(result);
      commit('initTodoList', { todolist: JSON.parse(result.data.data) });
    },
    async addTodo({ commit }, action) {
      const { text } = action;
      const result = await addTodo(text);
      if (result.data.code === 1) {
        commit('addTodoList', { todo: { text } });
      }
    }
  },
}