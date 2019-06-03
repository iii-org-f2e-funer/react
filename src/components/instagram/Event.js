import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
class Event extends React.Component {
  constructor() {
    super()
    this.state = {
      datas: [],
    }
  }
  componentDidMount() {
    this.refreshEvents()
    this.timer1 = setInterval(() => {
      this.ul.className = 'wipe-out'
      this.timer2 = setInterval(() => {
        this.refreshEvents()
      }, 800)
    }, 5000)
  }
  refreshEvents = () => {
    clearInterval(this.timer2)
    fetch('//13.112.90.13:3002/instagram/getEvents')
      .then(res => res.json())
      .then(obj => {
        this.ul.className = 'wipe-in'
        this.setState({ datas: obj.data })
      })
  }
  componentWillUnmount() {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  }
  render() {
    return (
      <>
        <div className="event">
          <div className="header">
            <p>揪團快訊</p>
            {/* <span>設定</span> */}
          </div>
          <ul ref={el => (this.ul = el)}>
            {this.state.datas.map(item => (
              <li>
                <Link to={"/event/info/"+item.pt_sid}
                  className={
                    item.pt_level === 'hard'
                      ? 'c1'
                      : item.pt_level === 'normal'
                      ? 'c2'
                      : item.pt_level === 'easy'
                      ? 'c3'
                      : 'c3'
                  }
                >
                  <h5>{item.pt_title}</h5>
                  <p>
                    <FaRegClock />
                    <span>2019/04/18 19:00</span>
                  </p>
                  <p>
                    <FaMapMarkerAlt />
                    <span>
                      {item.pt_city} {item.pt_add}
                    </span>
                  </p>
                  <p>
                    <FaUser />
                    <span>
                      {item.pt_member} / {item.pt_maxm}
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Event

//need data { 團名 新手or老手 時間 地點 人數 }
