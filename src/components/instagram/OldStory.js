import React from 'react'
import Carousel from './Carousel'
import OldComment from './OldComment'
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from 'react-icons/fa'
class OldStory extends React.Component {
  componentDidMount() {
    this.text.innerText = this.props.data.content
  }
  //發送留言
  handleSubmit = () => {
    // this.props.userID
    // this.textInput.innerText
    if (this.textInput.innerText.trim()) {
      const userID = 1
      const postID = this.props.data.post_id

      const data = {
        postID: postID,
        userID: userID,
        content: this.textInput.innerText,
      }

      fetch('http://localhost:3002/instagram/newComment', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.success === true) {
            this.textInput.innerText = ''
            //刷新
            this.props.handleReFresh()
          }
        })
    }
  }

  render() {
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
            <div className="post-content" ref={el => (this.text = el)} />
            {/* slider */}
            <div className="post-photos">
              <Carousel photos={this.props.data.photos} />
            </div>
          </div>
          <div className="post-footer">
            {/* 愛心 */}
            <FaRegHeart className="heart" />
            {/* 收藏 */}
            <FaRegBookmark className="bookmark" />
          </div>

          {/* 留言 */}
          {/* 舊的留言 */}
          <div className="comments">
            {this.props.data.comments.map(item => (
              <OldComment
                key={item.comment_id}
                data={item}
                handleReFresh={this.props.handleReFresh}
              />
            ))}
          </div>
          {/* 發送留言 */}
          <div className="publish">
            <div className="publish_inner">
              <div
                className="content"
                contentEditable={true}
                ref={el => (this.textInput = el)}
              />
              <span className="submit" onClick={this.handleSubmit}>
                發佈
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default OldStory
