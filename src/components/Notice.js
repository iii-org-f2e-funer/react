import React from 'react'
import { Link } from 'react-router-dom'

class Notice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notices: [] }
  }
  componentDidMount() {
    this.getNoticeData()
    this.timer = setInterval(() => {
      this.getNoticeData()
    }, 2000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // 撈 DB notice
  getNoticeData = () => {
    fetch('http://localhost:3002/notice/userNotice', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj)
        //判斷是否有新通知
        var haveNewNotice = false
        for (let i = 0; i < obj.notices.length; i++) {
          if (obj.notices[i].isRead === 0) {
            haveNewNotice = true
          }
        }
        //更新資料
        this.props.handleNewNotice(haveNewNotice)
        this.setState({ notices: obj.notices })
      })
  }
  // 切換已讀
  handleReadChange = notice_id => () => {
    fetch('http://localhost:3002/notice/ReadChange', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ notice_id: notice_id }),
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.getNoticeData()
        }
      })
  }

  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ul>
            <li className="notice_header">通知</li>
            {this.state.notices.map(item => (
              <li
                key={item.notice_id}
                className={item.isRead ? '' : 'unread'}
                onClick={
                  item.isRead ? '' : this.handleReadChange(item.notice_id)
                }
              >
                {item.link !== '' ? (
                  <Link to={item.link}>
                    <div className="item">
                      <img src={item.img} alt="" />
                      <div className="content">
                        <div
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: item.content,
                          }}
                        />
                        <div className="time"> {item.time}</div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="item">
                    <img src="" alt="" />
                    <div className="content">
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: item.content,
                        }}
                      />
                      <div className="time"> {item.time}</div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </>
    )
  }
}
export default Notice
