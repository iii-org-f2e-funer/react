import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.scss'
import LoginModal from './login/LoginModal'
import FirmRegisterModal from './login/FirmRegisterModal'
import UserRegisterModal from './login/UserRegisterModal'
import { FaComment, FaShoppingCart, FaBell, FaUserAlt } from 'react-icons/fa'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NavIcons from './NavIcons.js'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginPopup: false,
      registerPopup: false,
      userRegisterPopup: false,
    }
  }
  registerSuccess = () => {
    this.setState({ registerPopup: false })
  }
  firmLogin = () => {
    this.setState({ loginPopup: false })
  }
  userLogin = () => {
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

  render() {
    window.scrollTo(0, 0) //滾到最上面 (for instagram)
    return (
      <div
        className={
          this.props.location.pathname === '/' ? 'navbar navblue' : 'navbar'
        }
      >
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
              <NavIcons logOut={this.logOut} />
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
          </ul>
        </div>

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
      </div>
    )
  }
}

function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
    isFixed: store.isFixed,
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
