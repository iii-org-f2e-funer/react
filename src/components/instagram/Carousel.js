import React from 'react'
import { FaCircle } from 'react-icons/fa'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pointer: 0,
    }
  }
  // 按上一頁
  handlePrevClick = () => {
    this.setState({ pointer: this.state.pointer - 1 })
  }
  // 按下一頁
  handleNextClick = () => {
    this.setState({ pointer: this.state.pointer + 1 })
  }
  componentDidMount() {
    // this.props.photos
  }

  render() {
    return (
      <>
        {/* 空陣列就不用render Carousel */}
        {this.props.photos[0] !== '' ? (
          <div className="carousel">
            {/* 圖片list */}
            <div className="carousel_inner">
              <ul
                className="photo_list"
                style={{ left: `-${this.state.pointer * 100}%` }}
              >
                {this.props.photos.map((item, idx) => (
                  <li key={idx}>
                    <img
                      src={'http://13.112.90.13:3002/images/instagram/' + item}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>
            {/* 上一張 按鈕 */}
            {this.state.pointer > 0 ? (
              <div className="btn_prev" onClick={this.handlePrevClick}>
                <img src="/images/instagram/btn_prev.png" alt="" />
              </div>
            ) : (
              ''
            )}
            {/* 下一張 按鈕 */}
            {this.state.pointer < this.props.photos.length - 1 ? (
              <div className="btn_next" onClick={this.handleNextClick}>
                <img src="/images/instagram/btn_next.png" alt="" />
              </div>
            ) : (
              ''
            )}
            {/* 小圈圈 */}
            <div className="pagination">
              {this.props.photos.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    idx === this.state.pointer ? 'circle active' : 'circle'
                  }
                >
                  <FaCircle />
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    )
  }
}
export default Carousel
