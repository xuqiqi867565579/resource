import Vue from 'vue';
import Vuex from 'vuex';
import rootModel from './rootModel';
import modules from './modules';

Vue.use(Vuex);
// 创建store（仓库）
const store = new Vuex.Store({
  ...rootModel, // 配置跟模块
  modules, // 配置各个子模块
});
window.store = store;
export default store;
