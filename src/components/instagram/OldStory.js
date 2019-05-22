import React from 'react'
import Carousel from './Carousel'
class OldStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // console.log(this.props.data)
    return (
      <>
        <div className="oldStory story">
          {/* header 使用者頭像、取消編輯按鈕 */}
          <div className="post-header">
            <div className="poster">
              <img src={this.props.data.avatar} alt="" />
              <span>{this.props.data.nickname}</span>
            </div>
          </div>
          <hr />
          {/* body 內文 光箱 */}
          <div className="post-body">
            {/* 內文 */}
            <div className="post-content">{this.props.data.content}</div>
            {/* slider */}
            <div className="post-photos">
              <Carousel photos={this.props.data.photos} />
            </div>
          </div>
          <div className="post-footer" />

          {/* 留言 */}
        </div>
      </>
    )
  }
}
export default OldStory
