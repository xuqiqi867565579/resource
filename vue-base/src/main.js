/*
 * @Author: tao
 * @Date: 2019-03-31 10:16:02
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-31 10:21:45
 */
/**
 * 入口文件
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './config/elementUi-config';


Vue.config.productionTip = false;

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app', // 配置应用挂载点
  router, // 注入路由
  store, // 注入store
  render: h => <App />, // 根组件视图
});
window.vm = vm;
