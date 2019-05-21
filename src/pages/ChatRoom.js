import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import AsidePage from '../components/chatroom/pages/AsidePage'
import ChatArea from '../components/chatroom/pages/ChatArea'
import '../styles/chatroom/chatroomStyle.scss'

function ChatRoom() {
  return (
    <Router>
      <div className="chatroom">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 aside">
              <AsidePage />
            </div>
            <div className="col-lg chatArea">
              <Switch>
                <Route path="/chatroom/Message/user_id1" component={ChatArea} />
                <Route path="/chatroom/Message/user_id2" component={ChatArea} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default ChatRoom
