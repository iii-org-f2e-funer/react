import React from 'react'
import { FaEllipsisH, FaRegImage } from 'react-icons/fa'
class NewStory extends React.Component {
  constructor() {
    super()
    this.state = {
      content: 'Jerry,在想些什麼?',
    }
  }
  handleChange = event => {
    // console.log(event.target.innerText)
    this.setState({ content: event.target.innerText })
  }
  render() {
    return (
      <>
        <div className="newStory story">
          <div className="post-header">
            <div className="poster">
              <img
                src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'}
                alt=""
              />
              <span>Jerry</span>
            </div>
            <div className="setting">
              <FaEllipsisH />
            </div>
          </div>
          <hr />
          <div className="post-body">
            {/* 內文 */}
            <div
              className="post-content"
              contentEditable={true}
              onInput={this.handleChange}
              suppressContentEditableWarning={true}
            />

            {/* 圖片 */}
            <div className="post-image" />
          </div>
          <div className="post-footer">
            <FaRegImage />
            <span className="submmit">發佈</span>
          </div>
        </div>
      </>
    )
  }
}
export default NewStory
