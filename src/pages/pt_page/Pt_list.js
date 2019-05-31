import React from 'react'

import Pt_banner from '../../components/event/Pt_banner.js'

import { Pt_listpaginate } from '../../components/event/Pt_listpaginate'

import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// 跳出登入畫面的import 請copy以下並改成自己的from路徑
import LoginModal from '../../components/login/LoginModal'
import FirmRegisterModal from '../../components/login//FirmRegisterModal'
import UserRegisterModal from '../../components/login/UserRegisterModal'
//以上


import '../../styles/pt_style/pt_list.scss'

class Pt_list extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //跳出登入畫面的state 請copy以下
      loginPopup: false,
      registerPopup: false,
      userRegisterPopup: false,
      //以上
      data: [],
    }
  }
  //跳出登入畫面的function 請copy以下
  userLogin = () => {
    this.setState({ loginPopup: false })
  }
  registerShow = () => {
    this.setState({ registerPopup: true, loginPopup: false })
  }
  userRegisterShow = () => {
    this.setState({ userRegisterPopup: true, loginPopup: false })
  }
  registerHide = () => {
    this.setState({
      userRegisterPopup: false,
      registerPopup: false,
      userRegisterPopup: false,
    })
  }
  handleShow = () => {
    this.setState({
      loginPopup: true,
      userRegisterPopup: false,
      registerPopup: false,
    })
  }

  handleHide = () => {
    this.setState({ loginPopup: false })
  }
  //以上


  logincheck = e => {
    if (this.props.userInfo.login) {
      document.location.pathname = '/event/new/'
    } else {
      this.handleShow()
    }
  }

  render() {
    return (
      <>
        <Pt_banner check={this.logincheck} />
        <div className="ptlist_container">
          <div className="commentBox">
            {/* {this.state.data.map(item => (
            <Pt_listitem key={item.pt_sid} data={item} />
          ))} */}
            <Pt_listpaginate />
          </div>
        </div>
{/* 跳出登入畫面的modal 請copy以下 */}
        <LoginModal
          show={this.state.loginPopup}
          handleHide={this.handleHide}
          firmLogin={this.firmLogin}
          userLogin={this.userLogin}
          register={this.registerShow}
          userRegister={this.userRegisterShow}
        />
        <UserRegisterModal
          show={this.state.userRegisterPopup}
          handleHide={this.registerHide}
          switch={this.handleShow}
          registerSuccess={this.registerSuccess}
        />
        <FirmRegisterModal
          show={this.state.registerPopup}
          handleHide={this.registerHide}
          switch={this.handleShow}
          registerSuccess={this.registerSuccess}
        />
{/* 以上 */}
      </>
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
  )(Pt_list)
)
