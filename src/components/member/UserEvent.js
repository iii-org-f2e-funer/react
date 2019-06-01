// 揪團部分
import React from 'react'
import { withRouter } from 'react-router'
import { Card, ListGroup, Button } from 'react-bootstrap'
import Member_applyedpt from '../event/Member_applyedpt'
import Member_hostedpt from '../event/Member_hostedpt'

import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'

class UserEvent extends React.Component {
  constructor() {
    super()

    this.state = {
      account: '',
      applyed: [],
      hostedpt: [],
      applyeddone: false,
      hostedptdone: false,
    }
  }
  componentWillMount() {
    //抓登入資料
    if (this.props.userInfo.login) {
      fetch('//localhost:3002/firm/userInfo', {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(obj => {
          fetch('//localhost:3002/event/applyedpt', {
            method: 'POST',
            body: JSON.stringify({ account: obj.body.account }),
            headers: {
              'Content-type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(obj => {
              this.setState({ applyed: obj, applyeddone: true })
            })
          fetch('//localhost:3002/event/hostedpt', {
            method: 'POST',
            body: JSON.stringify({ account: obj.body.account }),
            headers: {
              'Content-type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(obj => {
              this.setState({ hostedpt: obj, hostedptdone: true })
            })
        })
    }
  }
  render() {
    if (!this.state.applyeddone || !this.state.hostedptdone) {
      return <></>
    } else {
      return (
        <>
          <h5>參加中的揪團</h5>
          {this.state.applyed.map(item => (
            <Member_applyedpt key={item.pt_applysid} data={item} />
          ))}

          <h5>你主揪的揪團</h5>
          {this.state.hostedpt.map(item => (
            <Member_hostedpt key={item.pt_sid} data={item} />
          ))}
        </>
      )
    }
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
  )(UserEvent)
)
