import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props.userInfo.body)
    return (
      <>
        <div className="user">
          <Link className="userInfo" to="">
            <img
              src={
                this.props.userInfo.isFirm
                  ? 'http://localhost:3002/images/firm/' +
                    this.props.userInfo.body.photo
                  : 'http://localhost:3002/images/member/' +
                    this.props.userInfo.body.photo
              }
              alt=""
            />
            <h5 className="userName">
              {this.props.userInfo.body.nickname}
              <br />
              <span className="userEmail">
                {this.props.userInfo.body.email}
              </span>
            </h5>
          </Link>

          <div className="userFunction">
            <ul>
              <li>
                <NavLink to="/instagram" exact activeClassName="active">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/images/instagram/newspaper-svgrepo-com.svg'
                    }
                    alt=""
                  />
                  最新動態
                </NavLink>
              </li>
              <li>
                <NavLink to="/instagram/bookmark" activeClassName="active">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/images/instagram/bookmark-regular.svg'
                    }
                    alt=""
                  />
                  收藏貼文
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(User)

// need data { 會員Id 名字 信箱 大頭貼網址 }
