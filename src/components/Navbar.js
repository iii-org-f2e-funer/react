import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import '../styles/navbar.scss'
import Notice from './Notice'
import UserMenu from './UserMenu'
import LoginModal from './login/LoginModal'
import FirmRegisterModal from './login/FirmRegisterModal'
import { FaComment, FaShoppingCart, FaBell, FaUserAlt } from 'react-icons/fa'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticeOpen: false,
      userMenuOpen: false,
      loginPopup: false,
      registerPopup: false,
    }
  }

  registerSuccess = () => {
    this.setState({ registerPopup: false })
  }
  login = () => {
    this.setState({ loginPopup: false })
  }
  logOut = () => {
    fetch('//localhost:3002/firm/logOut', {
      method: 'POST',
      body: '',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        this.props.logout()
        if (this.props.location.pathname === '/firm') {
          this.props.history.push('/')
        }
      })
  }
  registerShow = () => {
    this.setState({ registerPopup: true, loginPopup: false })
  }

  registerHide = () => {
    this.setState({ registerPopup: false })
  }
  handleShow = () => {
    this.setState({ loginPopup: true, registerPopup: false })
  }

  handleHide = () => {
    this.setState({ loginPopup: false })
  }
  handleNoticeOpen = () => {
    this.setState({ noticeOpen: !this.state.noticeOpen })
  }
  handleUserMenuOpen = () => {
    this.setState({ userMenuOpen: !this.state.userMenuOpen })
  }
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="brand_logo">
            <NavLink to="/">
              <img
                src={process.env.PUBLIC_URL + '/images/navbar/brand_logo.png'}
                alt="brand_logo"
              />
            </NavLink>
          </div>
          <ul className="web_nav">
            <li>
              <NavLink to="/event" activeClassName="active">
                揪團去
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">購買桌遊</NavLink>
            </li>
            <li>
              <NavLink to="/gamemap">預約店家</NavLink>
            </li>
            <li>
              <NavLink to="/instagram">桌遊論壇</NavLink>
            </li>
          </ul>
          <ul className="user_nav">
            {this.props.userInfo.login ? (
              <>
                <li>
                  <NavLink to="/Mycart" activeClassName="active">
                    <FaShoppingCart />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/chatroom/message" activeClassName="active">
                    <FaComment />
                  </NavLink>
                </li>
                <li>
                  <div
                    className={
                      this.state.noticeOpen ? 'notice_btn active' : 'notice_btn'
                    }
                    onMouseEnter={this.handleNoticeOpen}
                    onMouseLeave={this.handleNoticeOpen}
                  >
                    <FaBell />
                    <Notice isOpen={this.state.noticeOpen} />
                  </div>
                </li>

                <li>
                  <div
                    className={
                      this.state.userMenuOpen ? 'user_btn active' : 'user_btn'
                    }
                    onMouseEnter={this.handleUserMenuOpen}
                    onMouseLeave={this.handleUserMenuOpen}
                  >
                    <FaUserAlt />
                    <UserMenu
                      isOpen={this.state.userMenuOpen}
                      logOut={this.logOut}
                    />
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/Mycart" activeClassName="active">
                    <FaShoppingCart />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    onClick={this.handleShow}
                    activeClassName="active"
                  >
                    登入
                  </NavLink>
                </li>
              </>
            )}
            <LoginModal
              show={this.state.loginPopup}
              handleHide={this.handleHide}
              login={this.login}
              register={this.registerShow}
            />
            <FirmRegisterModal
              show={this.state.registerPopup}
              handleHide={this.registerHide}
              switch={this.handleShow}
              registerSuccess={this.registerSuccess}
            />
          </ul>
        </div>
      </div>
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
      logout: actions.logOut,
    }
  )(Navbar)
)
