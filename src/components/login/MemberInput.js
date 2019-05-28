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
          console.log(obj)
          if (obj.data.success) {
            alert(obj.data.message)
            console.log(obj.data)
            const account = this.state.account
            const payload = { account: account }
            this.props.userInfoAction(payload)
            this.props.userLogin(obj.data.user)
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
                placeholder="會員帳號"
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
                placeholder="會員密碼"
                className="password form-control"
                onBlur={this.checkPassword}
                required
                ref={el => (this.inputTitle = el)}
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
