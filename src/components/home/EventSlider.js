import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaRegClock,
  FaMapMarkerAlt,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'
class EventSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pointer: 0,
      //dir = 1 往右滑  -1 往左
      dir: 1,
    }
  }
  // 按上一個
  handlePrevClick = () => {
    this.setState({ pointer: this.state.pointer - 1 })
  }
  // 按下一個
  handleNextClick = () => {
    this.setState({ pointer: this.state.pointer + 1 })
  }
  handleAutoSlide = () => {}
  componentDidMount() {
    // this.props.events
  }
  render() {
    return (
      <>
        <div className="event_slider">
          <div className="slider_inner">
            {/* list */}
            <ul
              className="eventList"
              style={{ left: `-${this.state.pointer * 290}px` }}
            >
              {this.props.datas.map(item => (
                <li key={item.pt_sid} className="eventItem">
                  <Link>
                    <img src="" alt="" />
                    <p className="eventTitle">{item.pt_title}</p>
                    <p>
                      <FaRegClock />
                      {item.pt_time}
                    </p>
                    <p>
                      <FaMapMarkerAlt />
                      {item.pt_add}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {/* 上一張 按鈕 */}
            {this.state.pointer > 0 ? (
              <div
                className="slide_btn btn_prev"
                onClick={this.handlePrevClick}
              >
                <FaAngleLeft />
              </div>
            ) : (
              ''
            )}
            {/* 下一張 按鈕 */}
            {this.state.pointer < this.props.datas.length - 4 ? (
              <div
                className="slide_btn btn_next"
                onClick={this.handleNextClick}
              >
                <FaAngleRight />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </>
    )
  }
}
export default EventSlider
