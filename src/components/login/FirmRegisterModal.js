import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

class FirmRegisterModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { account: '', password: '' }
  }
  checkAccount = evt => {
    this.state.account = evt.target.value
  }
  checkPassword = evt => {
    this.state.password = evt.target.value
  }
  render() {
    return (
      <>
        <Modal
          className="login-form"
          show={this.props.show}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <div onClick={this.firmclick} className="register_title active">
              廠商註冊
            </div>
          </Modal.Header>
          <Modal.Body>
            <form ref="submitForm">
              <Form.Group controlId="formBasicEmail" className="login-control">
                <i className="fa fa-user" />
                <Form.Control
                  type="text"
                  placeholder="輸入信箱註冊"
                  className="account form-control"
                  onBlur={this.checkAccount}
                  required
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                className="login-control"
              >
                <i className="fa fa-lock" />
                <Form.Control
                  type="password"
                  placeholder="密碼(8-20碼)"
                  className="password form-control"
                  onBlur={this.checkPassword}
                  required
                  ref={el => (this.inputTitle = el)}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                className="login-control"
              >
                <i className="fa fa-lock" />
                <Form.Control
                  type="password"
                  placeholder="再次輸入密碼"
                  className="password form-control"
                  onBlur={this.checkPassword}
                  required
                  ref={el => (this.inputTitle = el)}
                />
              </Form.Group>
              <label htmlFor="store">店家</label>
              <input name="store" type="text" />
              <label htmlFor="unicode">統編</label>
              <input name="unicode" type="text" />
              <Button
                variant="primary"
                type="submit"
                className="button button--lg"
              >
                註冊
              </Button>
            </form>
            <div className="register">
              註冊即同意<span className="blue">隱私權政策</span> 和
              <span className="blue"> 使用者條款</span>
            </div>

            <div className="register" onClick={this.props.switch}>
              已經註冊?<span className="blue">登入</span>
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default FirmRegisterModal
