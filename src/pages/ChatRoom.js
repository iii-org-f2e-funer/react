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
import ChatArea_socket from '../components/chatroom/pages/ChatArea_socket'
import '../styles/chatroom/chatroomStyle.scss'
import ChatAreaOriginal from '../components/chatroom/pages/ChatAreaOriginal'

class ChatRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatData: [],
      inputId: '',
      logInId: '',
      doUpdate: '',
    }
  }
  handleUpdate = inputVal => {
    this.setState({ doUpdate: inputVal })
  }
  componentDidMount() {
    // fetch('http://localhost:3002/chatroom/message/user_id1', {
    //   method: 'GET',
    //   headers: { 'Content-type': 'application/json' },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('chatRoom:', data)
    //     return this.setState({ chatData: data })
    //   })
  }
  handleChange = event => {
    this.setState({ inputId: event.target.value })
  }
  handleClick = async () => {
    let logInId = this.state.inputId
    await this.setState({ logInId: this.state.inputId, inputId: '' })

    //login ok
    console.log(logInId)
    const response = await fetch(
      `http://localhost:3002/chatroom/message/${logInId}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()
    console.log(data)
    await this.setState({ chatData: data })
  }
  render() {
    return (
      <Router>
        <>
          <input value={this.state.inputId} onChange={this.handleChange} />
          <button onClick={this.handleClick}>send</button>
          {'welcome member: ' + this.state.logInId}
          <div className="chatroom">
            <div className="container ">
              <div className="row">
                <div className="col-lg-3 aside">
                  <AsidePage
                    logInId={this.state.logInId}
                    handleUpdate={this.handleUpdate}
                    upDatetext={this.state.doUpdate}
                  />
                </div>
                <div className="col-lg chatArea">
                  {/* 傳props 給子元件: */}
                  {/* <Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} /> */}
                  {/* <Route
                      path="/chatroom/Message/user_id2"
                      component={ChatArea_socket}
                    /> */}
                  <Switch>
                    {/*  在這邊map 所有Route出來  */}
                    {this.state.chatData.map(data => {
                      return this.state.logInId == data.from_id ? (
                        <Route
                          key={+new Date() + Math.random()}
                          path={
                            '/chatroom/Message/' +
                            'ID' +
                            this.state.logInId +
                            '/' +
                            'ID' +
                            data.to_id
                          }
                          render={() => (
                            <ChatArea_socket
                              logInId={this.state.logInId}
                              handleUpdate={this.handleUpdate}
                            />
                          )}
                        />
                      ) : (
                        <Route
                          key={+new Date() + Math.random()}
                          path={
                            '/chatroom/Message/' +
                            'ID' +
                            this.state.logInId +
                            '/' +
                            'ID' +
                            data.from_id
                          }
                          render={() => (
                            <ChatArea_socket
                              logInId={this.state.logInId}
                              handleUpdate={this.handleUpdate}
                            />
                          )}
                        />
                      )
                    })}
                    <Route
                      path={'/chatroom/Message/' + 'ID' + this.state.logInId}
                      component={ChatAreaOriginal}
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
