import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.scss'
import Notice from './Notice'
import UserMenu from './UserMenu'
import LoginModal from './login/LoginModal'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticeOpen: false,
      userMenuOpen: false,
      loginPopup: false
    }
  }
  handleShow = () => {
    this.setState({ loginPopup: true });
  };

  handleHide = () => {
    this.setState({ loginPopup: false });
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
              <NavLink to="/ig">桌遊論壇</NavLink>
            </li>
          </ul>
          <ul className="member_nav">
            <li>
              <NavLink to="/chatroom" activeClassName="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.587"
                  height="19.38"
                  viewBox="0 0 22.587 19.38"
                >
                  <path
                    id="comment-solid"
                    d="M11.293,32C5.055,32,0,36.027,0,41a7.914,7.914,0,0,0,2.515,5.654A10.968,10.968,0,0,1,.1,50.8a.339.339,0,0,0-.066.376.346.346,0,0,0,.322.208,10.2,10.2,0,0,0,6.2-2.224A13.69,13.69,0,0,0,11.293,50c6.238,0,11.293-4.027,11.293-9S17.531,32,11.293,32Z"
                    transform="translate(0 -32)"
                    fill="#949494"
                  />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.066"
                  height="20"
                  viewBox="0 0 23.066 20"
                >
                  <path
                    id="shopping-cart-solid"
                    d="M21.149,11.77l1.893-8.125A.944.944,0,0,0,22.105,2.5H6.376L6.009.75A.956.956,0,0,0,5.067,0H.961A.95.95,0,0,0,0,.938v.625A.95.95,0,0,0,.961,2.5h2.8L6.573,15.915a2.177,2.177,0,0,0-1.127,1.9,2.243,2.243,0,0,0,4.485,0,2.155,2.155,0,0,0-.674-1.563h8.4a2.155,2.155,0,0,0-.674,1.563,2.243,2.243,0,0,0,4.485,0A2.184,2.184,0,0,0,20.2,15.844l.221-.948a.944.944,0,0,0-.937-1.145H8.735L8.473,12.5H20.212A.956.956,0,0,0,21.149,11.77Z"
                    fill="#949494"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="notice_icon">
              <Link
                to="#"
                className={this.state.noticeOpen ? 'active' : ''}
                onClick={this.handleNoticeOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.5"
                  height="20"
                  viewBox="0 0 17.5 20"
                >
                  <path
                    id="bell-solid"
                    d="M8.749,20a2.5,2.5,0,0,0,2.5-2.5h-5A2.5,2.5,0,0,0,8.749,20Zm8.414-5.848C16.408,13.341,15,12.121,15,8.125a6.169,6.169,0,0,0-5-6.061V1.25a1.249,1.249,0,1,0-2.5,0v.814a6.169,6.169,0,0,0-5,6.061c0,4-1.412,5.216-2.167,6.027A1.22,1.22,0,0,0,0,15a1.251,1.251,0,0,0,1.254,1.25H16.245A1.251,1.251,0,0,0,17.5,15,1.22,1.22,0,0,0,17.163,14.152Z"
                    transform="translate(0.001)"
                    fill="#949494"
                  />
                </svg>
              </Link>
              {/* 通知 */}
              <Notice isOpen={this.state.noticeOpen} />
              {/* 通知 */}
            </li>
            <li className="user_icon">
              <Link
                to="#"
                className={this.state.userMenuOpen ? 'active' : ''}
                onClick={this.handleUserMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.5"
                  height="20"
                  viewBox="0 0 17.5 20"
                >
                  <path
                    id="user-solid"
                    d="M8.75,10a5,5,0,1,0-5-5A5,5,0,0,0,8.75,10Zm3.5,1.25H11.6a6.8,6.8,0,0,1-5.7,0H5.25A5.251,5.251,0,0,0,0,16.5v1.625A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V16.5A5.251,5.251,0,0,0,12.25,11.25Z"
                    fill="#949494"
                  />
                </svg>
              </Link>
              {/* 會員 submenu */}
              <UserMenu isOpen={this.state.userMenuOpen} />
              {/* 會員 submenu */}
            </li>
            <li>
              <NavLink variant="primary" onClick={this.handleShow}>登入</NavLink>
              <LoginModal show={this.state.loginPopup}
                handleHide={this.handleHide}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navbar
