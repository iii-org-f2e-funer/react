import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginInput from './LoginInput.js'

class LoginModal extends React.Component {

  userclick = () => {

  }
  firmclick = () => {

  }
  render() {
    return (
      <>
        <Modal
          className='login-form'
          show={this.props.show}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <div onClick={this.userclick()} className="login_title active">會員登入</div>
            <div onClick={this.firmclick()} className="login_title">廠商登入</div>
          </Modal.Header>
          <LoginInput />
        </Modal>
      </>
    )
  }
}


export default LoginModal
