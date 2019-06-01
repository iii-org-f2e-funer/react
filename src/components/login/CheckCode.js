import React from 'react'
import queryString from 'query-string'
import TWzipcode from 'react-twzipcode'
import { withRouter } from 'react-router'
import { FaCamera } from 'react-icons/fa'

class CheckCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islive: '',
      data: [],
      firmname: '',
      phone: '',
      city: '',
      dist: '',
      address: '',
      contacter: '',
      preViewImgs: [],
    }
  }
  handlecityChange = evt =>
    this.setState({
      city: evt.county,
    })
  handledistChange = evt =>
    this.setState({
      dist: evt.district,
    })
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    const code = values.code
    console.log(code)
    const data = { code: code }
    fetch('//localhost:3002/firm/checkCode', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({ islive: true, data: obj.body })
        } else {
        }
      })
  }
  // 新增圖片
  handleFilesChange = event => {
    const files = event.target.files
    var reader = new FileReader()
    reader.readAsDataURL(files) //read file data as a base64 encoded string.
    // reader loaded
    reader.addEventListener('load', function(e) {
      this.setState({ preViewImgs: files })
    })
  }
  updateAccount = () => {
    const data = {
      sid: this.state.data.sid,
      firmname: this.state.firmname,
      phone: this.state.phone,
      city: this.state.city,
      dist: this.state.dist,
      address: this.state.address,
      contacter: this.state.contacter,
    }
    fetch('//localhost:3002/firm/codeInfo', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          alert('填寫完成，請登入!')
          this.props.history.push('/')
        } else {
          alert(obj.massage)
        }
      })
  }
  render() {
    return (
      <>
        <div className="codeCheck pt-3">
          {this.state.islive ? (
            <div className="container pt-5">
              <div className="funner_pic m-auto">
                <div className="eye left">
                  <div className="eyeball " />
                </div>
                <div className="eye right">
                  <div className="eyeball " />
                </div>
                <div className="mouth" />
              </div>
              <h1 className="text-center mb-2 mt-3">恭喜成為FUNer會員!</h1>
              <h5 className="text-center mb-4 mt-3">
                認證成功! 完成基本資料即可登入!
              </h5>
              <div className="code_form" onSubmit="return false">
                <div className="d-flex justify-content-center">
                  <label htmlFor="myFile">
                    <div className="post-image">
                      {this.state.preViewImgs.length ? (
                        <img
                          src={
                            'http://localhost:3002/images/firm/' +
                            this.state.preViewImgs
                          }
                          alt=""
                        />
                      ) : (
                        <div className="code_avatar">
                          <FaCamera />
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    multiple
                    id="myFile"
                    type="file"
                    style={{ display: 'none' }}
                    ref={el => (this.fileInput = el)}
                    onChange={this.handleFilesChange}
                  />
                </div>

                <div className="flex mb-3">
                  <label className="col-4">店家名稱</label>
                  <input
                    type="text"
                    className="col-8"
                    value={this.state.firmname}
                    onChange={e => this.setState({ firmname: e.target.value })}
                  />
                </div>
                <div className="flex mb-3">
                  <label className="col-4">店家電話</label>
                  <input
                    className="col-8"
                    type="text"
                    value={this.state.phone}
                    onChange={e => this.setState({ phone: e.target.value })}
                  />
                </div>
                <div className="flex mb-3">
                  <label className="col-4">店家地址</label>
                  <div className="address">
                    <TWzipcode
                      countyFieldName="pt_city"
                      districtFieldName="pt_dist"
                      countyValue={this.state.city}
                      districtValue={this.state.dist}
                      css={[
                        'form-control county-sel code',
                        'form-control district-sel code',
                        'form-control zipcode',
                      ]}
                      handleChangeCounty={this.handlecityChange}
                      handleChangeDistrict={this.handledistChange}
                    />
                    <input
                      className="addressinput mt-2"
                      type="text"
                      value={this.state.address}
                      onChange={e => this.setState({ address: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex mb-3">
                  <label className="col-4">負責人</label>
                  <input
                    type="text"
                    className="col-8"
                    value={this.state.contacter}
                    onChange={e => this.setState({ contacter: e.target.value })}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="button button--lg mt-3"
                    onClick={this.updateAccount}
                  >
                    提交基本資料
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <h2>帳號認證失敗</h2>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default withRouter(CheckCode)
