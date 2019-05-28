import React from 'react'
import Carousel from './Carousel'
import OldComment from './OldComment'
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaEllipsisH,
  FaTimes,
  FaRegImage,
} from 'react-icons/fa'
class OldStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMenu: false, isEdit: false }
  }
  componentDidMount() {
    this.text.innerText = this.props.data.content
    console.log(this.props)
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

  handleFavorite = () => {
    var data = { userID: 1, postID: this.props.data.post_id }
    fetch('http://localhost:3002/instagram/changeFavorite', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          //刷新
          this.props.handleReFresh()
        }
      })
  }
  handleBookmark = () => {
    var data = { userID: 1, postID: this.props.data.post_id }
    fetch('http://localhost:3002/instagram/changeBookmark', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          //刷新
          this.props.handleReFresh()
        }
      })
  }
  // 展開下拉選單
  handleEditMenu = () => {
    this.setState({ editMenu: !this.state.editMenu })
  }
  // 編輯舊貼文
  handleEdit = () => {
    this.setState({ editMenu: false, isEdit: true }, () => {
      this.props.handleControlRefresh()
    })
  }
  handleOnBlur = e => {
    e.stopPropagation()
    this.setState({ editMenu: false, isEdit: false }, () => {
      this.props.handleControlRefresh()
    })
  }
  // 刪除貼文
  handleDelete = () => {
    var data = { userID: 1, postID: this.props.data.post_id }
    fetch('http://localhost:3002/instagram/deleteStory', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          //刷新
          this.props.handleReFresh()
        }
      })
  }
  render() {
    return (
      <>
        <div
          className={
            this.state.isEdit ? 'oldStory story editStory' : 'oldStory story'
          }
        >
          {/* header 使用者頭像、取消編輯按鈕 */}
          <div className="post-header">
            <div className="poster">
              <img src={this.props.data.avatar} alt="" />
              <span>{this.props.data.nickname}</span>
            </div>
            {this.props.editable ? (
              <div className="editable">
                {this.state.isEdit ? (
                  <FaTimes onClick={this.handleOnBlur} />
                ) : (
                  <FaEllipsisH onClick={this.handleEditMenu} />
                )}
                {this.state.editMenu ? (
                  <div className="edit">
                    <span onClick={this.handleEdit}>編輯</span>
                    <span onClick={this.handleDelete}>刪除</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
          </div>
          <hr />
          {/* body 內文 光箱 */}
          <div className="post-body">
            {/* 內文 */}
            <div
              className="post-content"
              ref={el => (this.text = el)}
              contentEditable={this.state.isEdit ? true : false}
            />
            {/* slider */}
            {/* 預覽圖 圖 photo */}
            {this.state.isEdit ? (
              <div className="post-image">
                {this.props.data.photos.map((item, idx) => {
                  if (item !== '') {
                    return (
                      <img
                        key={idx}
                        src={'http://localhost:3002/images/' + item}
                        alt=""
                      />
                    )
                  }
                })}
              </div>
            ) : (
              <div className="post-photos">
                <Carousel photos={this.props.data.photos} />
              </div>
            )}
          </div>
          {this.state.isEdit ? (
            <div className="post-footer">
              <label htmlFor="myfile" className="oldStoryImageEdit">
                <FaRegImage />
              </label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                style={{ display: 'none' }}
                multiple
                onChange={this.handleFilesChange}
                ref={el => (this.inputFiles = el)}
              />
              <span className="oldStoryEdit button">編輯完成</span>
            </div>
          ) : (
            <>
              <div className="post-footer">
                {/* 愛心 */}
                <div>
                  {this.props.isFav ? (
                    <FaHeart
                      className="heart hearted"
                      onClick={this.handleFavorite}
                    />
                  ) : (
                    <FaRegHeart
                      className="heart"
                      onClick={this.handleFavorite}
                    />
                  )}
                  <span className="favorites">
                    {this.props.data.favorites > 0
                      ? this.props.data.favorites + '個喜歡'
                      : ''}
                  </span>
                </div>

                {/* 收藏 */}

                {this.props.isBook ? (
                  <FaBookmark
                    className="bookmark bookmarked"
                    onClick={this.handleBookmark}
                  />
                ) : (
                  <FaRegBookmark
                    className="bookmark"
                    onClick={this.handleBookmark}
                  />
                )}
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
            </>
          )}
        </div>
        {this.state.isEdit ? (
          <div
            className="mask editMask"
            onClick={this.handleOnBlur}
            style={{ width: '100%', height: document.body.scrollHeight }}
          />
        ) : (
          ''
        )}
      </>
    )
  }
}
export default OldStory
