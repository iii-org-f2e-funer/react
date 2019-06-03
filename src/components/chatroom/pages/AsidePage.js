import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { InputGroup, FormControl } from 'react-bootstrap'
import Message_new from '../components/Message_new'
import FriendList from '../components/FriendList'

function AsidePage(props) {
  return (
    <>
      <div className="nav aside-page-box my-2 px-3 d-flex justify-content-center">
        <NavLink
          className="chat-link  px-2 mr-4"
          activeClassName="active"
          to={'/chatroom/message/' + 'ID' + props.logInId}
        >
          聊天室
        </NavLink>
        <NavLink
          className="chat-link  px-3"
          activeClassName="active"
          to={'/chatroom/FriendList/' + 'ID' + props.logInId}
        >
          好友列表
        </NavLink>
      </div>
      <InputGroup className="my-3 px-2">
        <FormControl
          className=" "
          name="searchText"
          placeholder="搜尋好友..."
        />
      </InputGroup>
      <Switch>
        <Route
          path={'/chatroom/message/' + 'ID' + props.logInId}
          render={() => (
            <Message_new logInId={props.logInId} refreshID={props.refresh} />
          )}
        />
        <Route
          path={'/chatroom/FriendList/' + 'ID' + props.logInId}
          render={() => (
            <FriendList refresh={props.refresh} logInId={props.logInId} />
          )}
        />
      </Switch>
    </>
  )
}

export default AsidePage
