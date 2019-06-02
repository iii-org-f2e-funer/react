import React from 'react'
import { Modal, Form, Col, Row } from 'react-bootstrap'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class userEditInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      member_id: '',
      nickname: '',
      gender: '',
      city: '',
      member_favorite: '',
      intro: '',
    }
  }
  updateAccount = () => {}

  render() {
    return (
      <>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              暱稱
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
              性別
            </Form.Label>
            <Col sm={10}>
              <p>南</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              地區
            </Form.Label>
            <Col sm={10}>
              <p>南</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              擅長遊戲
            </Form.Label>
            <Col sm={10}>
              <p>南</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              關於我
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows="8"
                value={this.state.about}
                onChange={e => this.setState({ about: e.target.value })}
              />
              <p className="color-grey remindText">
                * 提醒您，豐富的自我介紹可以提高參團及揪團成功的機率哦!
              </p>
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
  )(userEditInput)
)
