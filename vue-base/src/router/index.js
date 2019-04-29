/*
 * @Author: tao
 * @Date: 2019-03-31 10:19:00
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-31 10:31:06
 */
/**
 * 路由系统配置文件
 */
import Vue from 'vue';
import Router from 'vue-router';
import routes from './router.config';

Vue.use(Router);
const router = new Router({
  routes,
});
/**
 * 全局的导航守卫
 * router.beforeEach 前置守卫
 * router.beforReslove 前置解析守卫
 * router.afterEach 后置函数
 * 
 * 路由独享的守卫
 * beforEnter 
 * 组件内的守卫
 * beforeRouteEnter
 * beforeRouteUpdate
 * beforeRouteLeave
 * 
 */
// 全局前置守卫
router.beforeEach((to,from,next) => {
  console.log('beforeEach');
  if(to.fullPath === '/login'){
    next();
    return;
  }
  if(to.meta.isAutho){
    next();
  }else{
    next({path: '/login'});
  }
})
// 前置解析守卫  （在配置的所有的守卫都执行后才执行）；
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next();
})
// 路由跳转完成后执行(目标路由组件还没有开始实例化)
router.afterEach((to, from) => {
  console.log('afterEach');
})

window.router = router;
export default router;
