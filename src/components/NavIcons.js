import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaComment, FaShoppingCart, FaBell, FaUserAlt } from 'react-icons/fa'
import Notice from './Notice.js'
import UserMenu from './UserMenu.js'
import FirmMenu from './FirmMenu.js'
import actions from '../redux/action/userInfo.js'
import { connect } from 'react-redux'

class NavIcons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticeOpen: false,
      userMenuOpen: false,
    }
  }
  handleNoticeOpen = () => {
    this.setState({ noticeOpen: !this.state.noticeOpen })
  }
  handleUserMenuOpen = () => {
    this.setState({ userMenuOpen: !this.state.userMenuOpen })
  }

  render() {
    return (
      <>
        {this.props.userInfo.isFirm ? (
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
                <FirmMenu
                  isOpen={this.state.userMenuOpen}
                  logOut={this.props.logOut}
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
                to={'/chatroom/message/' + 'ID' + this.props.userInfo.account}
                activeClassName="active"
              >
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
                  logOut={this.props.logOut}
                />
              </div>
            </li>
          </>
        )}
      </>
    )
  }
}

function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
  }
}

export default connect(
  mapStateToProp,
  {
    firmInfoAction: actions.userInfo,
  }
)(NavIcons)
