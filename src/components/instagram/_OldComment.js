import React from 'react'
class OldComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="comment">
        <img src="" alt="" className="avatar" />
        <div className="comment_inner">
          <div className="text">
            <span className="sender">Jerry</span>
            <span className="content">Hello</span>
          </div>
          <div className="time">1分鐘前</div>
        </div>
      </div>
    )
  }
}

export default OldComment
