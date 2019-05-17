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
              <Link to="#">會員中心</Link>
            </li>
            <li>
              <Link to="#">聊天紀錄</Link>
            </li>
            <li>
              <Link to="#">我的揪團</Link>
            </li>
            <li>
              <Link to="#">訂單紀錄</Link>
            </li>
            <hr />
            <li>
              <Link to="#">登出</Link>
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
