import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
class Event extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="event">
          <div className="header">
            <p>揪團快訊</p>
            <span>設定</span>
          </div>
          <ul>
            <li>
              <Link className="c1">
                <h5>神秘or蓋亞 輔大逗桌遊</h5>
                <p>
                  <FaRegClock />
                  <span>2019/04/18 19:00</span>
                </p>
                <p>
                  <FaMapMarkerAlt />
                  <span>神秘or蓋亞 輔大逗桌遊</span>
                </p>
                <p>
                  <FaUser />
                  <span>5 / 6</span>
                </p>
              </Link>
            </li>
            <li>
              <Link className="c2">
                <h5>神秘or蓋亞 輔大逗桌遊</h5>
                <p>
                  <FaRegClock />
                  <span>2019/04/18 19:00</span>
                </p>
                <p>
                  <FaMapMarkerAlt />
                  <span>神秘or蓋亞 輔大逗桌遊</span>
                </p>
                <p>
                  <FaUser />
                  <span>5 / 6</span>
                </p>
              </Link>
            </li>
            <li>
              <Link className="c3">
                <h5>神秘or蓋亞 輔大逗桌遊</h5>
                <p>
                  <FaRegClock />
                  <span>2019/04/18 19:00</span>
                </p>
                <p>
                  <FaMapMarkerAlt />
                  <span>神秘or蓋亞 輔大逗桌遊</span>
                </p>
                <p>
                  <FaUser />
                  <span>5 / 6</span>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Event

//need data { 團名 新手or老手 時間 地點 人數 }
