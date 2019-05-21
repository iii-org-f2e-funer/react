import React from 'react'
// //withRouter 匯入這個方法來讓子元件可以得到ROUTER的URL屬性
import { withRouter } from 'react-router'
import avatar from '../avatar/ironman.jpg'
// const PathNow = props => <div>目前位置 {props.location.pathname}</div>;

// export default withRouter(PathNow);

function ChatArea(props) {
  return (
    <>
      {props.location.pathname} <br />
      {props.someProp} <br />
      {props.text}
      <div className="chat_box">
        <div className="message_list">
          <h5 className="text-center">您可以開始與user_id1聊天</h5>
          <h5 className="text-center">timeSpan</h5>
          {/* 資料庫撈資料進來的地方 */}
          {/* 如果是自己傳給對方在右邊(有sender class) */}
          <ul className="d-flex flex-column ">
            <li className={'sender'}>
              <div className="text-box sender align-items-center">
                <h5 className="my-auto">
                  這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話這是第一段話
                </h5>
              </div>
              <small>timespan</small>
            </li>

            {/* 如果是對方傳來在左邊 */}
            <li>
              <div className="text-box  align-items-center">
                <div className="avatar ">
                  <img src={avatar} alt="會員1頭像" />
                </div>
                <h5 className="my-auto">
                  這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話這是第二段話
                </h5>
              </div>
              <small>timespan</small>
            </li>
          </ul>
        </div>
        <div className="send_box d-flex ">
          <input className="blue" type="text" />
          <button className="button button--yellow">傳送</button>
        </div>
      </div>
    </>
  )
}

export default withRouter(ChatArea)
