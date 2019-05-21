import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginInput from './LoginInput.js'

class LoginModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userOn: true,
    }
  }
  userclick = () => {
    this.setState({ userOn: true })
  }
  firmclick = () => {
    this.setState({ userOn: false })
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
            <div
              onClick={this.userclick}
              className={'login_title ' + (this.state.userOn ? 'active' : '')}
            >
              會員登入
            </div>
            <div
              onClick={this.firmclick}
              className={'login_title ' + (this.state.userOn ? '' : 'active')}
            >
              廠商登入
            </div>
          </Modal.Header>
          {this.state.userOn ? (
            <div style={{ height: '300px' }}>會員登入元件</div> //會員登入的表單，我先用我的原件，之後放eason的元件
          ) : (
            <LoginInput
              login={this.props.login}
              register={this.props.register}
            />
          ) //廠商登入的表單
          }
        </Modal>
      </>
    )
  }
}

export default LoginModal
