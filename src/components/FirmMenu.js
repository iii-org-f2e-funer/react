import React from 'react'
import { Link } from 'react-router-dom'

class FirmMenu extends React.Component {
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
              <Link to="/firm">會員中心</Link>
            </li>
            <li>
              <Link to="#">訂單紀錄</Link>
            </li>
            <li>
              <Link to="#">商品管理</Link>
            </li>
            <li>
              <Link to="#">場地管理</Link>
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
export default FirmMenu
