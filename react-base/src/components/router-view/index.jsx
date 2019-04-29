/*
 * @Author: tao 
 * @Date: 2019-03-30 19:20:50 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-30 19:28:53
 */
/**
 * 封装一个可以根据路由配置数据自动的生成路由配置的组件
 */
import React , {Component} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
class RouterView extends Component{
    render(){
        const { routes,match={path:''} } = this.props;
        return <Switch>
            {
                routes && routes.map(item => {
                    return <Route 
                        key={item.routeId}
                        path={`${match.path}/${item.path}`}
                        render={props=>{
                            const Com = item.component;
                            return <Com {...{...item,...props}} />
                        }}
                     />
                })
            }
        </Switch>
    }
}
export default RouterView;