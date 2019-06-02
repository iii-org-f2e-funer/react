import React from 'react'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { Modal, Form, Button } from 'react-bootstrap'

class MemberInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      remindText: '',
      passwordShow: false,
      loginSuccess: false,
    }
  }
  register = () => {
    this.props.userRegister()
  }
  passwordShow = () => {
    this.setState({ passwordShow: !this.state.passwordShow })
  }
  checkAccount = evt => {
    this.setState({ account: evt.target.value })
  }
  checkPassword = evt => {
    this.setState({ password: evt.target.value })
  }

  MemberRequest = evt => {
    if (this.refs.submitForm.reportValidity()) {
      evt.preventDefault()
      var data = {
        account: this.state.account,
        password: this.state.password,
      }
      fetch('//localhost:3002/member/userLogin', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(obj => {
          if (obj.data.success) {
            alert(obj.data.message)
            this.setState({ loginSuccess: true })
            const payload = { account: obj.data.member_id }
            this.props.userInfoAction(payload)
            this.props.userLogin(obj.data.user)
          } else {
            this.inputAccount.value = ''
            this.inputPassword.value = ''
            alert(obj.data.message)
            this.setState({ remindText: obj.data.message })
          }
        })
    }
  }
  render() {
    return (
      <>
        <Modal.Body>
          <form ref="submitForm">
            <Form.Group controlId="formBasicEmail" className="login-control">
              <i className="fa fa-user" />
              <Form.Control
                type="text"
                placeholder="會員帳號"
                className="account form-control"
                onBlur={this.checkAccount}
                ref={el => (this.inputAccount = el)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="login-control">
              <i className="fa fa-lock" />
              <i
                className={
                  'fas fa-eye ' + (this.state.passwordShow ? 'active' : '')
                }
                onClick={this.passwordShow}
              />
              <Form.Control
                type={this.state.passwordShow ? 'text' : 'password'}
                placeholder="會員密碼"
                className="password form-control"
                onBlur={this.checkPassword}
                required
                ref={el => (this.inputPassword = el)}
              />
              <Form.Text className="red">{this.state.remindText}</Form.Text>
            </Form.Group>
            <button
              variant="primary"
              type="submit"
              className="button button--lg"
              onClick={this.MemberRequest}
            >
              登入
            </button>
            <div className="funner_pic m-auto">
              <div className="eye left">
                <div className="eyeball " />
              </div>
              <div className="eye right">
                <div className="eyeball " />
              </div>
              <div className="mouth" />
            </div>
          </form>
          <ul>
            <li className="register blue">
              <div>忘記密碼</div>
            </li>
            <li className="register blue">
              <div onClick={this.register}>會員註冊</div>
            </li>
          </ul>
        </Modal.Body>
      </>
    )
  }
}

const mapStateToProp = store => {
  return store
}

export default connect(
  mapStateToProp,
  {
    userInfoAction: actions.userInfo,
  }
)(MemberInput)
