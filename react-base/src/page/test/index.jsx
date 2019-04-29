import React, { Component } from 'react'
import RouterView from '../../components/router-view'
export default class Index extends Component {
  render() {
    const {routes} = this.props;
    console.log(routes);
    return <RouterView routes={routes} {...this.props} />
  }
}
