import React from 'react'
import { FaCircle } from 'react-icons/fa'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pointer: 0,
      photos: [],
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
    // porps傳進來的資料 設定給 state
    // this.props.photos

    this.setState({ photos: this.props.photos })
  }

  render() {
    return (
      <>
        {/* 空陣列就不用render Carousel */}
        {this.state.photos[0] !== '' ? (
          <div className="carousel">
            {/* 圖片list */}
            <div className="carousel_inner">
              <ul
                className="photo_list"
                style={{ left: `-${this.state.pointer * 100}%` }}
              >
                {this.state.photos.map((item, idx) => (
                  <li key={idx}>
                    <img src={'http://localhost:3002/images/' + item} alt="" />
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
            {this.state.pointer < this.state.photos.length - 1 ? (
              <div className="btn_next" onClick={this.handleNextClick}>
                <img src="/images/instagram/btn_next.png" alt="" />
              </div>
            ) : (
              ''
            )}
            {/* 小圈圈 */}
            <div className="pagination">
              {this.state.photos.map((item, idx) => (
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
