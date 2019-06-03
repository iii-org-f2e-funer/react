import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import AsidePage from '../components/chatroom/pages/AsidePage'
import ChatArea_socket_new from '../components/chatroom/pages/ChatArea_socket_new'
import OMPDetailFriendList from '../components/chatroom/components/OMPdetail_friendList'
import '../styles/chatroom/chatroomStyle.scss'
import ChatAreaOriginal from '../components/chatroom/pages/ChatAreaOriginal'
import Account from '../components/firm/Account'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class ChatRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      //{h_id: 1,h_sub: "BOB",m_id: 1,m_cont: "你好，BOB初次見面!",m_time: "2019-05-21T16:45:57.000Z",sender: 1,}
      chatData: [],
      inputId: '',
      logInId: '',
      refresh: 0,
    }
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:3002/chatroom/message/${this.props.userInfo.account}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    )
    const data = await response.json()
    console.log(data)
    await this.setState({ chatData: data })
  }

  // handleClick = async () => {
  //   let logInId = this.state.inputId
  //   await this.setState({ logInId: this.state.inputId, inputId: '' })

  //   //login ok
  //   console.log(logInId)
  //   const response = await fetch(
  //     `http://localhost:3002/chatroom/message/${this.props.userInfo.member_id}`,
  //     {
  //       method: 'GET',
  //       headers: { 'Content-type': 'application/json' },
  //     }
  //   )
  //   const data = await response.json()
  //   console.log(data)
  //   await this.setState({ chatData: data })
  // }
  handleRefreh = () => {
    let isRefresh = !this.state.refresh
    this.setState({ refresh: isRefresh })
  }
  render() {
    return (
      <Router>
        <>
          <div className="chatroom">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 aside">
                  <AsidePage
                    logInId={this.props.userInfo.account}
                    refreshID={this.state.refresh}
                    refresh={this.handleRefreh}
                  />
                </div>
                <div className="col-md chatArea">
                  {/* 傳props 給子元件: */}
                  {/* <Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} /> */}
                  {/* <Route
                      path="/chatroom/Message/user_id2"
                      component={ChatArea_socket}
                    /> */}
                  <Switch>
                    {/*  在這邊map 所有Route出來  */}
                    {this.state.chatData.map(data => {
                      return this.props.userInfo.account == data.from_id ? (
                        <Route
                          key={data.to_id}
                          path={
                            '/chatroom/Message/' +
                            'ID' +
                            this.props.userInfo.account +
                            '/' +
                            'ID' +
                            data.to_id
                          }
                          render={() => (
                            <ChatArea_socket_new
                              logInId={this.props.userInfo.account}
                              userData={this.state.chatData}
                              refresh={this.handleRefreh}
                              toName={data.y_toname}
                            />
                          )}
                        />
                      ) : (
                        <Route
                          key={data.from_id}
                          path={
                            '/chatroom/Message/' +
                            'ID' +
                            this.props.userInfo.account +
                            '/' +
                            'ID' +
                            data.from_id
                          }
                          render={() => (
                            <ChatArea_socket_new
                              logInId={this.props.userInfo.account}
                              userData={this.state.chatData}
                              refresh={this.handleRefreh}
                              toName={data.y_toname}
                            />
                          )}
                        />
                      )
                    })}
                    <Route
                      path={
                        '/chatroom/Message/' +
                        'ID' +
                        this.props.userInfo.account
                      }
                      component={ChatAreaOriginal}
                    />
                    <Route
                      path={'/chatroom/FriendList/:LogInId/:toID'}
                      component={() => (
                        <OMPDetailFriendList
                          logInId={this.props.userInfo.account}
                          refresh={this.handleRefreh}
                          refreshID={this.state.refresh}
                        />
                      )}
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
  )(ChatRoom)
)
