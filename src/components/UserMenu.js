import React from 'react'
import { Link } from 'react-router-dom'

class UserMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ul>
            <li>
              <div className="avatar">
                <img src="" alt="" />
              </div>
            </li>
            <li>
              <Link to="/member/account">會員中心</Link>
            </li>
            <li>
              <Link to="/member/userevent">我的揪團</Link>
            </li>
            <li>
              <Link to="/member/UserShopping">訂單查詢</Link>
            </li>
            <li>
              <Link to="/member/userSite">場地預定</Link>
            </li>
            <hr />
            <li>
              <Link to="#" onClick={this.props.logOut}>
                登出
              </Link>
            </li>
          </ul>
        ) : (
          ''
        )}
      </>
    )
  }
}
export default UserMenu
