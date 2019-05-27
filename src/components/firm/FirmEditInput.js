import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import TWzipcode from 'react-twzipcode'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class FirmEditInput extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    const data = this.props.firmData
    this.state = {
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
    if (this.state.insert) {
      fetch('//localhost:3002/firm/insertAccount', {
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
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
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
              <Form.Control type="file" placeholder="" />
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
