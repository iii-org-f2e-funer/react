import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegCommentDots } from 'react-icons/fa'

class InstagramSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      datas: [],
    }
    this.pointer = 0 // 初始化pointer
    this.numbers = 1 // 顯示個數
    this.slideHeight = 385 //高度
    this.position = -1 * this.slideHeight * this.numbers // -1 * 顯示個數 * 每個高度
  }
  componentDidMount() {
    // this.props.events
    fetch('http://localhost:3002/home/homeInstagram')
      .then(res => res.json())
      .then(obj => {
        if (obj.success === true) {
          console.log(obj.data)
          var arr = [obj.data[obj.data.length - 1], ...obj.data, obj.data[0]]
          this.setState({ datas: arr }, () => {
            this.data_length = obj.data.length // 原始資料長度
            this.carousel.style.top = this.position + 'px' // 設定初始位置
          })
        }
      })

    // 開起輪播
    this.timer = setInterval(() => {
      this.handleNextClick()
    }, 3000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  // 往下滾
  handleNextClick = () => {
    this.pointer += 1
    if (this.pointer === this.data_length + 1) {
      this.carousel.style.transition = 'none'
      this.pointer = 0
      this.position = -this.numbers * this.slideHeight
      this.carousel.style.top = this.position + 'px'
      setTimeout(() => {
        this.carousel.style.transition = '0.4s'
        this.pointer += 1
        this.position -= this.slideHeight
        this.carousel.style.top = this.position + 'px'
      }, 20)
    } else {
      this.position -= this.slideHeight
      this.carousel.style.top = this.position + 'px'
    }
  }

  render() {
    return (
      <>
        <div className="instagram_slider">
          <div className="slider_inner">
            <ul className="instagram_list" ref={el => (this.carousel = el)}>
              {/* items */}
              {this.state.datas.map((item, idx) => (
                <li key={idx} className="instagram_item">
                  <div className="card_head">
                    <div className="card_container">
                      <img
                        src={process.env.PUBLIC_URL + '/images/home/avatar.jpg'}
                        alt=""
                      />
                      <span>
                        <span className="poster">{item.nickname}</span>
                        <br />
                        {item.post_time}
                      </span>
                    </div>
                  </div>
                  <div className="card_body">
                    <div
                      className="card_content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    >
                      {/* 有沒有人會主持瘋狂詭宅呢??
                      <br />
                      最近打算辦一團在卡卡城公館店，
                      <br />
                      來做個民調XDDD */}
                    </div>
                  </div>
                  <div className="card_footer">
                    <div className="card_container">
                      <FaHeart />
                      <span>{item.favorites}</span> <FaRegCommentDots />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </li>
              ))}

              {/* items */}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default InstagramSlider
