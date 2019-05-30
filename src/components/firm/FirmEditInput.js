import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import TWzipcode from 'react-twzipcode'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { FaRegImage, FaTrashAlt } from 'react-icons/fa'

class FirmEditInput extends React.Component {
  constructor(props) {
    super(props)
    const data = this.props.firmData
    console.log(this.props.img)
    this.state = {
      preViewImgs: [], // 預覽 base64 Data Array
      img: this.props.img,
      insert: this.props.insert,
      sid: data.sid,
      firm_id: this.props.firm_id,
      store: data.store,
      county: data.county,
      dist: data.dist,
      address: data.address,
      phone: data.phone,
      business_hours: data.business_hours,
      public_holiday: data.public_holiday,
      charges: data.charges,
      about: data.about,
      rule: data.rule,
      status: data.status,
    }
  }

  handlecityChange = evt =>
    this.setState({
      county: evt.county,
    })
  handledistChange = evt =>
    this.setState({
      dist: evt.district,
    })
  // 新增圖片
  handleFilesChange = event => {
    const files = event.target.files
    var _this = this
    let preViewImgs = [] // 建立新陣列

    for (let i = 0; i < files.length; i++) {
      var reader = new FileReader()
      reader.readAsDataURL(files[i]) //read file data as a base64 encoded string.
      // reader loaded
      reader.addEventListener('load', function(e) {
        preViewImgs.push(e.target.result)
        _this.setState({ preViewImgs: preViewImgs })
      })
    }
  }
  updateAccount = () => {
    const data = {
      sid: this.state.sid,
      firm_id: this.state.firm_id,
      store: this.state.store,
      county: this.state.county,
      dist: this.state.dist,
      address: this.state.address,
      phone: this.state.phone,
      business_hours: this.state.business_hours,
      public_holiday: this.state.public_holiday,
      charges: this.state.charges,
      about: this.state.about,
      rule: this.state.rule,
      status: this.state.status,
    }
    var fd = new FormData()
    Object.keys(data).forEach(key => fd.append(key, data[key]))
    // fd.append('data', data)
    for (let i = 0; i < this.fileInput.files.length; i++) {
      fd.append('files', this.fileInput.files[i])
    }
    console.log(fd)
    if (this.state.insert) {
      fetch('//localhost:3002/firm/insertAccount', {
        method: 'POST',
        body: fd,
        credentials: 'include',
      })
        .then(res => res.json())
        .then(obj => {
          if (obj.success) {
            console.log(obj.message)
            this.props.cancelEdit()
          } else {
            console.log(obj.message)
            this.props.cancelEdit()
          }
        })
    } else {
      fetch('//localhost:3002/firm/updateAccount', {
        method: 'POST',
        body: fd,
        credentials: 'include',
      })
        .then(res => res.json())
        .then(obj => {
          if (obj.success) {
            console.log(obj.message)
            this.props.cancelEdit()
          } else {
            console.log(obj.message)
            this.props.cancelEdit()
          }
        })
    }
  }

  render() {
    const img = this.props.img
    return (
      <>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              店家名稱
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.store}
                onChange={e => this.setState({ store: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              店家照片
            </Form.Label>
            <Col sm={10}>
              <label className="img_icon" htmlFor="myFile">
                <FaRegImage />
              </label>
              <input
                multiple
                id="myFile"
                type="file"
                style={{ display: 'none' }}
                ref={el => (this.fileInput = el)}
                onChange={this.handleFilesChange}
              />
              <div className="post-image">
                {this.props.img
                  ? this.props.img.map((item, index) => (
                      <img
                        key={index}
                        src={
                          'http://localhost:3002/images/firm/' + item.image_path
                        }
                        alt=""
                      />
                    ))
                  : ''}
                {/* <img src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'} alt="" /> */}
                {this.state.preViewImgs.map((item, idx) => (
                  <img key={idx} src={item} alt="" />
                ))}
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              地址
            </Form.Label>
            <Col sm={10}>
              <div>
                <TWzipcode
                  countyFieldName="pt_city"
                  districtFieldName="pt_dist"
                  countyValue={this.state.county}
                  districtValue={this.state.dist}
                  css={[
                    'form-control county-sel',
                    'form-control district-sel',
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
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              店家電話
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Password"
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              營業時間
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.business_hours}
                onChange={e =>
                  this.setState({ business_hours: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              收費資訊
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows="5"
                value={this.state.charges}
                onChange={e => this.setState({ charges: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              關於我們
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows="5"
                value={this.state.about}
                onChange={e => this.setState({ about: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              場地規範
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows="5"
                value={this.state.rule}
                onChange={e => this.setState({ rule: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              是否開放
            </Form.Label>
            <Col sm={10} className="d-flex align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="1"
                  checked={this.state.status === 1}
                  onChange={e => this.setState({ status: +e.target.value })}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  場地開放預約
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="0"
                  checked={this.state.status === 0}
                  onChange={e => this.setState({ status: +e.target.value })}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  暫不開放
                </label>
              </div>
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <div className="button mt-3 mr-3" onClick={this.updateAccount}>
              確認更改
            </div>
            <div
              className="button button-white mt-3"
              onClick={this.props.cancelEdit}
            >
              取消變更
            </div>
          </div>
        </Form>
      </>
    )
  }
}

function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
  }
}

export default withRouter(
  connect(
    mapStateToProp,
    {
      userInfoAction: actions.userInfo,
    }
  )(FirmEditInput)
)
