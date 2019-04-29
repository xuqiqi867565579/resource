/*
 * @Author: tao 
 * @Date: 2019-03-30 19:17:22 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-30 19:20:02
 */
/**
 * 应用的根组件
 */

import React , {Component} from 'react'
import RootRouter from './router'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component{
    render(){
        return <Provider store={store}>
            <RootRouter />
        </Provider>
    }
}
export default App;
