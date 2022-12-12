import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createDemo1Action} from '../../redux/action_creates/test_action'

 class Admin extends Component {
  render() {
    return (
      <div>admin</div>
    )
  }
}

export default connect(
  state => ({peiqi:state.test}),
  {
    demo1:createDemo1Action
  }
)(Admin)
