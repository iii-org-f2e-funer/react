import React from 'react'
import OMPsidePage from '../components/chatroom/components/OMPsidePage'
import OMPdetail from '../components/chatroom/components/OMPdetail'
import Account from '../components/firm/Account'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import '../styles/chatroom/openMemberPage.scss'

class OpenMemberPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    if (!this.props.userInfo.account) {
      return null
    }
    console.log(this.props.userInfo.account)
    return (
      <div className="OpenMemberPage">
        <div className="container d-flex">
          <OMPsidePage logInId={this.props.userInfo.account} />
          <OMPdetail />
        </div>
      </div>
    )
  }
}

function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
  }
}

export default withRouter(
  connect(
    mapStateToProp,
    {
      userInfoAction: actions.userInfo,
    }
  )(OpenMemberPage)
)
