import React from 'react'

class Pt_imgupload extends React.Component {
  constructor(props) {
    super(props)

    // this.handleShow = this.handleShow.bind(this)
    // this.handleClose = this.handleClose.bind(this)
    // this.handleApply = this.handleApply.bind(this)

    this.state = {
      pt_img: '',
      imgurl: '',
      //   show: false,
      //   applysuccess: false,
    }
  }
  //上傳圖片
  handleuploadimg = e => {
    this.refs.fileUploader.click()
  }

  handleimgChange = e => {
    const imgfile = e.target.files[0]
    // this.setState({ imgdata: imgfile })
    console.log(imgfile)
    const imgdata = new FormData()
    imgdata.append('pt_img', imgfile)
    console.log(imgdata)

    fetch('//localhost:3002/event/imgupload', {
      method: 'POST',
      body: imgdata,
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        this.setState({ pt_img: obj.file })
        this.setState({ imgurl: obj.filepath })
      })
      .then()
  }
  render() {
    return (
      <>
        <div className="form-row">
          <label for="pt_imgfile">桌遊封面</label>
          <input
            type="file"
            id="pt_imgfile"
            name="pt_imgfile"
            ref="fileUploader"
            accept="image/jpeg,.png"
            onChange={this.handleimgChange}
            style={{ display: 'none' }}
          />
          <div className="imgfield">
            <img src={this.state.imgurl} alt="" />
            <div className="pt_imgupload" onClick={this.handleuploadimg}>
              <i className="fas fa-camera" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Pt_imgupload
