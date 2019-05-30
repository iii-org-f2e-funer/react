import React from 'react'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { Modal, Form, Button } from 'react-bootstrap'

class LoginInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      remindText: '',
      passwordShow: false,
    }
  }
  register = () => {
    this.props.register()
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

  FirmRequest = evt => {
    if (this.refs.submitForm.reportValidity()) {
      evt.preventDefault()
      var data = {
        account: this.state.account,
        password: this.state.password,
      }
      fetch('//localhost:3002/firm/firmLogin', {
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
          if (obj.data.success) {
            alert(obj.data.message)
            console.log(obj.data)
            const account = this.state.account
            const payload = { account: account }
            this.props.firmInfoAction(payload)
            this.props.firmLogin(obj.data.user)
          } else {
            this.inputTitle.value = ''
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
                placeholder="廠商帳號"
                className="account form-control"
                onBlur={this.checkAccount}
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
                placeholder="廠商密碼"
                className="password form-control"
                onBlur={this.checkPassword}
                required
                ref={el => (this.inputTitle = el)}
              />
              <Form.Text className="red">{this.state.remindText}</Form.Text>
            </Form.Group>
            <button
              type="submit"
              className="button button--lg"
              onClick={this.FirmRequest}
            >
              登入
            </button>
          </form>
          <ul>
            <li className="register blue">
              <div>忘記密碼</div>
            </li>
            <li className="register blue">
              <div onClick={this.register}>廠商註冊</div>
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
    firmInfoAction: actions.firmInfo,
  }
)(LoginInput)
