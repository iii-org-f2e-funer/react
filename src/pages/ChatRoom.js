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
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatData: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:3002/chatroom/message/user_id1', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data))

        return this.setState({ chatData: JSON.stringify(data) })
      })
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
                        <ChatArea chatData={this.state.chatData} />
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
