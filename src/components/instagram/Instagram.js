import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../styles/instagram/instagram.scss'
import User from './User'
import Stories from './Stories'
import Bookmark from './Bookmark'
import Event from './Event'
import { withRouter } from 'react-router-dom'
class Instagram extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userInfo: {}, isGuest: true }
  }
  componentWillMount() {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          if (obj.isFirm) {
            // 整理廠商格式
            obj.body.member_id = 'f_' + obj.body.sid
            obj.body.nickname = obj.body.firmname
            obj.body.photo = obj.body.my_file
          }
          this.setState({ userInfo: obj, isGuest: false })
        } else {
          alert('請先登入')
          this.props.history.push('/')
        }
      })
  }
  componentDidMount() {}

  render() {
    if (this.state.isGuest) return null
    return (
      <>
        <div className="instagram container navfixed">
          <User userInfo={this.state.userInfo} />
          <Switch>
            <Route exact path="/:instagram" component={Stories} />
            <Route exact path="/:instagram/bookmark" component={Bookmark} />
          </Switch>
          <Event />
        </div>
      </>
    )
  }
}
export default withRouter(Instagram)
