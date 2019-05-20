import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Message from '../components/Message'
import FriendList from '../components/FriendList'

function AsidePage() {
  return (
    <>
      <div className="row justify-content-around aside-page-box">
        <div className="col-lg-4 pt-3 pb-1">
          <Link to="/message">聊天室</Link>
        </div>
        <div className="col-lg-6 pt-3 pb-1">
          <Link to="/FriendList">好友列表</Link>
        </div>
      </div>
      <Switch>
        <Route path="/Message" component={Message} />
        <Route path="/FriendList" component={FriendList} />
      </Switch>
    </>
  )
}

export default AsidePage
