import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const User = () => {
  return (
    <>
      <div className="user">
        <Link className="userInfo" to="">
          <img
            src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'}
            alt=""
          />
          <h5 className="userName">
            Jerry
            <br />
            <span className="userEmail">theKnight@gmail.com</span>
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

            <li>
              <NavLink to="/instagram/battle" activeClassName="active">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/instagram/tictactoe-regular.svg'
                  }
                  alt=""
                />
                圈叉對戰
              </NavLink>
            </li>
            <li>
              <Link to="#">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/instagram/handshake-regular.svg'
                  }
                  alt=""
                />
                每日一抽
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default User

// need data { 會員Id 名字 信箱 大頭貼網址 }
