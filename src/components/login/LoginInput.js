import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

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
    this.state.account = evt.target.value
  }
  checkPassword = evt => {
    this.state.password = evt.target.value
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
            this.props.login(obj.data.user)
            localStorage.setItem('account', obj.data.body.account)
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
            <Button
              variant="primary"
              type="submit"
              className="button button--lg"
              onClick={this.FirmRequest}
            >
              登入
            </Button>
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

export default withRouter(LoginInput)
