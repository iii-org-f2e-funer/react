import React from 'react'
import { Modal, Form, Col, Row } from 'react-bootstrap'
import TWzipcode from 'react-twzipcode'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Modal
          className="firmEdit"
          show={this.props.editPopup}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <h4 className="text-center">店家基本資訊</h4>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                店家名稱
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="" />
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
                    onChange={e => this.setState({ address: e.target.value })}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                電話
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                營業時間
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows="3" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                收費資訊
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows="3" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                關於我們
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows="3" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                場地規範
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows="3" />
              </Col>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button className="button mt-3 mr-3" onClick={this.updateAccount}>
                確認更改
              </button>
              <button
                className="button button-white mt-3"
                onClick={this.props.cancelEdit}
              >
                取消變更
              </button>
            </div>
          </Form>
        </Modal>
      </>
    )
  }
}

export default AccountEdit
