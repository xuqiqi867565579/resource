/**
 * 路由根组件
 */
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import RouterView from '../components/router-view'
import React, { Component } from 'react'
import routerConfig from './config'
class RootRouter extends Component {
  render() {
    return <Router>
      <RouterView routes={routerConfig} />
    </Router>
  }
}
export default RootRouter;