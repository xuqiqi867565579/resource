/*
 * @Author: tao
 * @Date: 2019-03-31 10:18:03
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-31 10:22:58
 */
/**
 * 路由配置文件
 */
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    // beforeEnter: () => {}
    // props: true,
    // props:{name:'loing',age: 23},// 三种情况 1. 布尔值  2. 对象   3. 函数
    // props: (route) => { // 在该路由被匹配的时候调用 ，参数是该路由的信息
    //   return {a:23,...route,name:'aaa',age:45}
    // },
    // meta:{routeName:'login'},// 永久存在
    component: () => import('../page/login'),
    // props
    // components
    // alias 别名
    // meta
  },
  {
    path: '/test',
    // components: {
    //   test: () => import('../page/test'),
    //   test1: () => import('../page/test/index1.vue'),
    //   test2: () => import ('../page/test/index2.vue')
    // },
    component: () => import('../page/test'),
    children: [
      {
        path:'todolist',
        component: () => import('../page/test/todolist'),
        alias: 'todo'
      },
      {
        path:'eltab',
        component: () => import('../page/test/eltab')
      },
      {
        path:'vuebase',
        component: () => import('../page/test/vuebase')
      },
      {
        path: 'home/:id',
        component: () => import('../page/test/home'),
        meta: {
          isAutho: true
        },
        props:true,
        beforeEnter(to, from, next){
          console.log('home-beforeEnter');
          next();
        }
      },
      {
        path: 'list',
        component: () => import('../page/test/list'),
        meta:{
          isAutho: true
        }
      },
      {
        path: 'detail',
        component: () => import('../page/test/detail')
      }
    ]
  }
];

export default routes;
