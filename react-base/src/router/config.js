import Test from '../page/test'
import Home from '../page/test/routes/home'
import List from '../page/test/routes/list'
const routerConfig = [
  {
    path: 'test',
    component: Test,
    routeId:'test',
    routes: [
      {
        path: 'home',
        component: Home,
        routeId: 'home'
      },
      {
        path: 'list',
        component: List,
        routeId: 'list'
      }
    ]
  }
];
export default routerConfig;