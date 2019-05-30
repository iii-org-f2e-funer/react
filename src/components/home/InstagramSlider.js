import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegCommentDots } from 'react-icons/fa'

class InstagramSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pointer: 0,
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
  componentDidMount() {
    // this.props.events
  }
  render() {
    return (
      <>
        <div className="instagram_slider">
          <div className="slider_inner">
            <ul className="instagram_list">
              {/* items */}
              <li className="instagram_item">
                <div className="card_head">
                  <div className="card_container">
                    <img
                      src={process.env.PUBLIC_URL + '/images/home/avatar.jpg'}
                      alt=""
                    />
                    <span>
                      <span className="poster">Jerry</span>
                      <br />
                      6月5日 上午08:50
                    </span>
                  </div>
                </div>
                <div className="card_body">
                  <div className="card_content">
                    有沒有人會主持瘋狂詭宅呢??
                    <br />
                    最近打算辦一團在卡卡城公館店，
                    <br />
                    來做個民調XDDD
                  </div>
                </div>
                <div className="card_footer">
                  <div className="card_container">
                    <FaHeart />
                    <span>20</span> <FaRegCommentDots /> <span>5</span>
                  </div>
                </div>
              </li>
              {/* items */}
              {/* items */}
              <li className="instagram_item">
                <div className="card_head">
                  <div className="card_container">
                    <img src="http://localhost:3002/images/avatar.jpg" alt="" />
                    <span>
                      <span className="poster">Jerry</span>
                      <br />
                      6月5日 上午08:50
                    </span>
                  </div>
                </div>
                <div className="card_body">
                  <div className="card_content">
                    有沒有人會主持瘋狂詭宅呢??
                    <br />
                    最近打算辦一團在卡卡城公館店，
                    <br />
                    來做個民調XDDD
                  </div>
                </div>
                <div className="card_footer">
                  <div className="card_container">
                    <FaHeart />
                    <span>20</span> <FaRegCommentDots /> <span>5</span>
                  </div>
                </div>
              </li>
              {/* items */}
              {/* items */}
              <li className="instagram_item">
                <div className="card_head">
                  <div className="card_container">
                    <img src="http://localhost:3002/images/avatar.jpg" alt="" />
                    <span>
                      <span className="poster">Jerry</span>
                      <br />
                      6月5日 上午08:50
                    </span>
                  </div>
                </div>
                <div className="card_body">
                  <div className="card_content">
                    有沒有人會主持瘋狂詭宅呢??
                    <br />
                    最近打算辦一團在卡卡城公館店，
                    <br />
                    來做個民調XDDD
                  </div>
                </div>
                <div className="card_footer">
                  <div className="card_container">
                    <FaHeart />
                    <span>20</span> <FaRegCommentDots /> <span>5</span>
                  </div>
                </div>
              </li>
              {/* items */}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default InstagramSlider
