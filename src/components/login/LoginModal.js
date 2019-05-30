import React from 'react'
import { Modal } from 'react-bootstrap'
import LoginInput from './LoginInput.js'
import MemberInput from './MemberInput.js'

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
            <MemberInput
              userLogin={this.props.userLogin}
              userRegister={this.props.userRegister}
            />
          ) : (
            <LoginInput
              firmLogin={this.props.firmLogin}
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
