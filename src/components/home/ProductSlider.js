import React from 'react'
import { Link } from 'react-router-dom'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
class ProductSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      datas: [],
    }
    this.pointer = 0 // 初始化pointer
    this.numbers = 5 // 顯示個數
    this.slideWidth = 232 //寬度
    this.position = -1 * this.slideWidth * this.numbers // -1 * 顯示個數 * 每個寬度
  }
  componentDidMount() {
    fetch('http://localhost:3002/home/homeProduct')
      .then(res => res.json())
      .then(obj => {
        if (obj.success === true) {
          var arr = [
            obj.data[obj.data.length - 5],
            obj.data[obj.data.length - 4],
            obj.data[obj.data.length - 3],
            obj.data[obj.data.length - 2],
            obj.data[obj.data.length - 1],
            ...obj.data,
            obj.data[0],
            obj.data[1],
            obj.data[2],
            obj.data[3],
            obj.data[4],
          ]
          this.setState({ datas: arr }, () => {
            this.data_length = obj.data.length // 原始資料長度
            this.carousel.style.left = this.position + 'px' // 設定初始位置
          })
        }
      })

    // 開起輪播
    this.timer = setInterval(() => {
      this.handleNextClick()
    }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // 按上一個
  handlePrevClick = () => {
    this.pointer -= 1
    if (this.pointer === -1 * (this.numbers + 1)) {
      this.carousel.style.transition = 'none'
      this.pointer = this.data_length - this.numbers
      this.position = -1 * this.data_length * this.slideWidth
      this.carousel.style.left = this.position + 'px'
      setTimeout(() => {
        this.carousel.style.transition = '0.4s'
        this.pointer -= 1
        this.position += this.slideWidth
        this.carousel.style.left = this.position + 'px'
      }, 20)
    } else {
      this.position += this.slideWidth
      this.carousel.style.left = this.position + 'px'
    }
  }
  // 按下一個
  handleNextClick = () => {
    this.pointer += 1
    if (this.pointer === this.data_length + 1) {
      this.carousel.style.transition = 'none'
      this.pointer = 0
      this.position = -this.numbers * this.slideWidth
      this.carousel.style.left = this.position + 'px'
      setTimeout(() => {
        this.carousel.style.transition = '0.4s'
        this.pointer += 1
        this.position -= this.slideWidth
        this.carousel.style.left = this.position + 'px'
      }, 20)
    } else {
      this.position -= this.slideWidth
      this.carousel.style.left = this.position + 'px'
    }
  }

  render() {
    return (
      <>
        <div className="product_slider">
          <div className="slider_inner">
            {/* list */}
            <ul className="productList" ref={el => (this.carousel = el)}>
              {this.state.datas.map((item, idx) => (
                <li key={item.sid} className="productItem">
                  <Link>
                    {/* <img src={item.image_path} alt="" /> */}
                    <img
                      src={process.env.PUBLIC_URL + '/images/home/09.jpg'}
                      alt=""
                    />
                    <p className="productTitle">{item.productName}</p>
                    <p>NT {item.price}</p>
                  </Link>
                </li>
              ))}
            </ul>
            {/* 上一張 按鈕 */}
            <div className="slide_btn btn_prev" onClick={this.handlePrevClick}>
              <FaAngleLeft />
            </div>

            {/* 下一張 按鈕 */}
            <div className="slide_btn btn_next" onClick={this.handleNextClick}>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default ProductSlider
