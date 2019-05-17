import React from 'react'
import { Media } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Media>
          <div className="img-outter">
            <div className="avatar">
              <img
                src={process.env.PUBLIC_URL + '/images/personalFolder/logo.png'}
              />
            </div>
          </div>
          <Media.Body>
            <p>桌遊糖果城</p>
            <p>candycity@gmail.tw</p>
            <button>編輯店家資料</button>
          </Media.Body>
        </Media>
        <div className="link">
          <ul>
            <li>
              <a href="">帳號設定</a>
            </li>
            <li>
              <a href="">商品管理</a>
            </li>
            <li>
              <a href="">商品訂單</a>
            </li>
            <li>
              <a href="">場地管理</a>
            </li>
            <li>
              <a href="">場地預約訂單</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
