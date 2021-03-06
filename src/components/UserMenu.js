import React from 'react'
import { Link } from 'react-router-dom'

class UserMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: '',
    }
  }
  componentDidMount() {
    fetch('//13.112.90.13:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ avatar: obj.body.photo })
        } else {
          console.log('無logo')
        }
      })
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.avatarRefresh !== nextProps.avatarRefresh) {
      fetch('//13.112.90.13:3002/firm/userInfo', {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(obj => {
          if (obj.success) {
            this.setState({ avatar: obj.body.photo })
          } else {
            console.log('無logo')
          }
        })
    }
  }
  render() {
    // console.log(this.state.avatar)
    return (
      <>
        {this.props.isOpen ? (
          <ul>
            <li>
              <div className="avatar">
                {this.state.avatar === '' || this.state.avatar === undefined ? (
                  <img
                    alt="無法顯示"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/member/preset_avatar.png'
                    }
                  />
                ) : (
                  <img
                    alt=""
                    src={
                      'http://13.112.90.13:3002/images/member/' +
                      this.state.avatar
                    }
                  />
                )}
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
              <Link to="/member/site_reservation">場地預定</Link>
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
