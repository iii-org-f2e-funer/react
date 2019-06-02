import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

class UserRegisterModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      passwordCheck: '',
      email: '',
      remindText: '',
      //   store: '',
      //   uniform: '',
    }
  }

  checkEmail = evt => {
    if (evt.target.value !== '') {
      let email = evt.target.value
      let data = { email: evt.target.value }
      fetch('//localhost:3002/member/emailCheck', {
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
          this.setState({ email: '' })
          if (obj.data.success) {
            this.setState({ email: email })
            return
          } else {
            this.inputemail.value = ''
            alert(obj.data.message)
          }
        })
    }
  }
  checkAccount = evt => {
    if (evt.target.value.length > 0 && evt.target.value !== '') {
      let account = evt.target.value
      let data = { account: evt.target.value }
      fetch('//localhost:3002/member/accountCheck', {
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
          this.setState({ account: '' })
          if (obj.data.success) {
            this.setState({ account: account })
            return
          } else {
            this.inputaccount.value = ''
            alert(obj.data.message)
          }
        })
    }
  }
  checkPassword = evt => {
    if (evt.target.value.length > 0 && evt.target.value.length < 8) {
      alert('密碼需8碼以上')
      this.inputPassword.value = ''
    }
    this.setState({ password: evt.target.value })
  }
  checkPasswordAgain = evt => {
    if (evt.target.value !== '') {
      if (this.state.password !== evt.target.value) {
        this.inputPassword2.value = ''
        this.setState({ remindText: '密碼不一致!' })
      } else {
        this.setState({ remindText: '' })
      }
    }
  }
  // 註冊
  UserRegisterRequest = evt => {
    if (this.refs.submitForm.reportValidity()) {
      evt.preventDefault()
      var data = {
        account: this.state.account,
        password: this.state.password,
        email: this.state.email,
        name: this.inputname.value,
      }
      fetch('//localhost:3002/member/userRegister', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(obj => {
          console.log(obj)
          if (obj.data.success) {
            alert(obj.data.message)
            // console.log(obj.data)
            this.props.registerSuccess()
          } else {
            alert(obj.data.message)
          }
        })
    }
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
            <div onClick={this.userclick} className="register_title active">
              會員註冊
            </div>
          </Modal.Header>
          <Modal.Body>
            <form ref="submitForm">
              <Form.Group controlId="formBasicEmail" className="login-control">
                <i className="fa fa-user" />
                <Form.Control
                  type="text"
                  placeholder="輸入帳號"
                  className="account form-control"
                  onBlur={this.checkAccount}
                  required
                  ref={el => (this.inputaccount = el)}
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
                  ref={el => (this.inputPassword = el)}
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
                  onBlur={this.checkPasswordAgain}
                  required
                  ref={el => (this.inputPassword2 = el)}
                />
                <Form.Text className="red">{this.state.remindText}</Form.Text>
              </Form.Group>

              <label htmlFor="uniform">姓名</label>
              <input
                className="pl-3"
                name="uniform"
                type="text"
                required
                ref={el => (this.inputname = el)}
              />

              <label htmlFor="uniform">信箱</label>
              <input
                className="pl-3"
                name="uniform"
                type="email"
                required
                onBlur={this.checkEmail}
                ref={el => (this.inputemail = el)}
              />

              <Button
                variant="primary"
                type="submit"
                className="button button--lg"
                onClick={this.UserRegisterRequest}
              >
                註冊
              </Button>
            </form>
            <div className="register center">
              註冊即同意<span className="blue">隱私權政策</span>和
              <span className="blue">使用者條款</span>
            </div>
            <div className="register center" onClick={this.props.switch}>
              已經註冊?<span className="blue">登入</span>
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default UserRegisterModal
