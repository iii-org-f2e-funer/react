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
  handlecancel = pt_applysid => {
    const newapplyed = this.state.applyed.filter(element => {
      return element.pt_applysid !== pt_applysid
    })
    this.setState({ applyed: newapplyed })
  }

  render() {
    if (!this.state.applyeddone || !this.state.hostedptdone) {
      return <></>
    } else {
      return (
        <>
          <h5>參加中的揪團</h5>
          {this.state.applyed == '' ? (
            <div className="applyed none">
              <div>你目前沒有參加的揪團</div>
            </div>
          ) : (
            <>
              {this.state.applyed.map(item => (
                <Member_applyedpt
                  key={item.pt_applysid}
                  data={item}
                  cancel={this.handlecancel}
                />
              ))}
            </>
          )}
          <h5>你主揪的揪團</h5>
          {this.state.hostedpt == '' ? (
            <div className="applyed none">
              <div>你目前沒有舉辦的揪團</div>
            </div>
          ) : (
            <>
              {this.state.hostedpt.map(item => (
                <Member_hostedpt key={item.pt_sid} data={item} />
              ))}
            </>
          )}
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
