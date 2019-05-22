import React from 'react'
import { FaTimes, FaRegImage } from 'react-icons/fa'
class NewStory extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '', // post-body content 貼文內文
      preViewImgs: [], // 預覽 base64 Data Array
      isEditing: false,
    }
  }
  // 正在編輯狀態
  handleIsEditing = () => {
    this.setState({ isEditing: true })
  }
  handleNoEditing = () => {
    this.inputText.innerText = ''
    this.setState({ isEditing: false, content: '', preViewImgs: [] })
  }
  handleOnBlur = () => {
    this.setState({ isEditing: false })
  }
  // 貼文內容改變
  handleChange = event => {
    console.log(this.inputText)
    // console.log(event.target.innerText)
    this.setState({ content: event.target.innerText })
  }

  // 新增圖片
  handleFilesChange = event => {
    // console.log(event.target.files)
    const files = event.target.files

    var _this = this
    let preViewImgs = [] // 建立新陣列

    for (let i = 0; i < files.length; i++) {
      var reader = new FileReader()
      reader.readAsDataURL(files[i]) //read file data as a base64 encoded string.
      // reader loaded
      reader.addEventListener('load', function(e) {
        // console.log(e.target.result)
        //
        preViewImgs.push(e.target.result)
        _this.setState({ preViewImgs: preViewImgs })
      })
    }
  }
  render() {
    return (
      <>
        <div className="newStory story">
          {/* header 使用者頭像 取消編輯按鈕 */}
          <div className="post-header">
            <div className="poster">
              <img
                src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'}
                alt=""
              />
              <span>Jerry</span>
            </div>
            <div className="setting">
              {this.state.isEditing ? (
                <FaTimes onClick={this.handleNoEditing} />
              ) : (
                ''
              )}
            </div>
          </div>
          <hr />
          {/* body 內文 圖片預覽列 */}
          <div className="post-body">
            {/* 內文 */}
            <div
              className="post-content"
              contentEditable={true}
              onInput={this.handleChange}
              suppressContentEditableWarning={true}
              onFocus={this.handleIsEditing}
              ref={el => (this.inputText = el)}
            />
            {this.state.content === '' ? (
              <div className="placeholder">Jerry，在想些什麼</div>
            ) : (
              ''
            )}
            {/* 圖片預覽 */}
            {this.state.isEditing ? (
              <div className="post-image">
                {/* <img src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'} alt="" /> */}
                {this.state.preViewImgs.map(item => (
                  <img src={item} alt="" />
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
          {/* footer 圖片、發佈按鈕 */}
          {this.state.isEditing ? (
            <div className="post-footer">
              {/* 隱藏的input trigger by label */}
              <label htmlFor="myfile">
                <FaRegImage />
              </label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                style={{ display: 'none' }}
                multiple
                onChange={this.handleFilesChange}
              />
              <span className="submmit">發佈</span>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* 編輯時的遮罩 */}
        {this.state.isEditing ? (
          <div
            className="mask"
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
export default NewStory
