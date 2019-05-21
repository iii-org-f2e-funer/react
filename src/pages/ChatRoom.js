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

class ChatRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      a: '300',
    }
  }
  render() {
    return (
      <Router>
        <>
          <div className="chatroom">
            <div className="container ">
              <div className="row">
                <div className="col-lg-3 aside">
                  <AsidePage />
                </div>
                <div className="col-lg chatArea">
                  {/* 傳props 給子元件: */}
                  {/* <Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} /> */}
                  <Switch>
                    <Route
                      path="/chatroom/Message/user_id1"
                      render={props => (
                        <ChatArea
                          {...props}
                          someProp={'100'}
                          text={this.state.a}
                        />
                      )}
                    />
                    <Route
                      path="/chatroom/Message/user_id2"
                      component={ChatArea}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </>
      </Router>
    )
  }
}

export default ChatRoom
