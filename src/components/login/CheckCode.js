import React from 'react'
import queryString from 'query-string'
import { Form, Col, Row } from 'react-bootstrap'
import TWzipcode from 'react-twzipcode'

class CheckCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islive: '',
      data: [],
    }
  }
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
        console.log(obj)
        if (obj.success) {
          this.setState({ islive: true, data: obj.body })
        } else {
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
              <p className="text-center mb-3">認證成功!請完成基本資料並登入!</p>
              <Form className="code_form">
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="4">
                    店家
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={this.state.data.firmname}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                  <Form.Label column sm="4">
                    店家電話
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                  <Form.Label column sm="4">
                    店家地址
                  </Form.Label>
                  <Col sm="8">
                    <div>
                      <TWzipcode
                        countyFieldName="pt_city"
                        districtFieldName="pt_dist"
                        countyValue={this.state.city}
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
                        onChange={e =>
                          this.setState({ address: e.target.value })
                        }
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                  <Form.Label column sm="4">
                    負責人
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <button className="button mt-3" onClick={this.updateAccount}>
                  提交資料
                </button>
              </Form>
            </div>
          ) : (
            <h2>帳號認證失敗</h2>
          )}
        </div>
      </>
    )
  }
}

export default CheckCode
