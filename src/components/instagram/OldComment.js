import React from 'react'
import { Link } from 'react-router-dom'
class OldComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editSubComment: false,
    }
  }
  // 留言的留言 開關
  handleEditSubComment = () => {
    this.setState({ editSubComment: !this.state.editSubComment })
  }
  // 發送留言的留言
  handleSubmit = () => {
    // this.props.userID
    // this.textInput.innerText
    if (this.textInput.innerText.trim()) {
      // console.log(this.props)
      const data = {
        commentID: this.props.data.comment_id,
        userID: this.props.userInfo.body.member_id,
        content: this.textInput.innerText,
      }

      fetch('http://localhost:3002/instagram/newSubComment', {
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

  render() {
    return (
      <>
        {/* 留言 */}
        <div key={this.props.data.comment_id} className="comment">
          <Link to={"/chatroom/openMemberPage/ID" + this.props.data.member_id}>
            <img
              src={
                this.props.data.isFirm
                  ? 'http://localhost:3002/images/firm/' + this.props.data.avatar
                  : 'http://localhost:3002/images/member/' +
                  this.props.data.avatar
              }
              alt=""
              className="avatar"
            />
          </Link>
          <div className="comment_inner">
            <div className="text">
            <Link to={"/chatroom/openMemberPage/ID" + this.props.data.member_id}>
              <span className="sender">{this.props.data.nickname}</span></Link>
              <span className="content">{this.props.data.content} </span>
            </div>
            <div className="time">
              {this.props.data.comment_time} &nbsp;&nbsp;
              <span
                className="subcomment_btn"
                onClick={this.handleEditSubComment}
              >
                留言
              </span>
            </div>
          </div>
        </div>
        {/* 留言的留言 */}
        {this.props.data.subcomments.map(item => (
          <div key={item.subcomment_id} className="sub comment">
          <Link to={"/chatroom/openMemberPage/ID" + this.props.data.member_id}>
            <img
              src={
                item.isFirm
                  ? 'http://localhost:3002/images/firm/' + item.avatar
                  : 'http://localhost:3002/images/member/' + item.avatar
              }
              alt=""
              className="avatar"
            />
            </Link>
            <div className="comment_inner">
              <div className="text">
              <Link to={"/chatroom/openMemberPage/ID" + this.props.data.member_id}>
                <span className="sender">{item.nickname}</span>
                </Link>
                <span className="content">{item.content} </span>
              </div>
              <div className="time">
                {item.subcomment_time} &nbsp;&nbsp;
                <span
                  className="subcomment_btn"
                  onClick={this.handleEditSubComment}
                >
                  留言
                </span>
              </div>
            </div>
          </div>
        ))}
        {this.state.editSubComment ? (
          <div className="sub publish">
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
        ) : (
            ''
          )}
      </>
    )
  }
}

export default OldComment
