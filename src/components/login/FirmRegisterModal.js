import React from 'react'
import { Modal, Form, Button, Col, Row } from 'react-bootstrap'

class FirmRegisterModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      passwordCheck: '',
      email: '',
      unicode: '',
      remindText: '',
      remindText2: '',
      accountRemindText: '',
      emailRemindText: '',
      unicodeRemindText: '',
    }
  }
  checkStore = evt => {
    this.setState({ store: evt.target.value })
    this.inputunicode.value = ''
  }
  checkunicode = evt => {
    if (evt.target.value !== '') {
      if (evt.target.value.length !== 8) {
        this.setState({ unicodeRemindText: '請輸入8碼統編' })
      }
      let unicode = evt.target.value
      let data = { unicode: evt.target.value }
      fetch('//13.112.90.13:3002/firm/unicodeCheck', {
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
          this.setState({ unicode: '' })
          if (obj.data.success) {
            this.setState({ unicode: unicode })
            return
          } else {
            this.inputunicode.value = ''
            this.setState({ unicodeRemindText: obj.data.message })
          }
        })
    }
  }
  noremindText = () => {
    this.setState({
      remindText: '',
      remindText2: '',
    })
  }
  noremindText2 = () => {
    this.setState({
      remindText2: '',
    })
  }
  noaccountRemindText = () => {
    this.setState({
      accountRemindText: '',
    })
  }
  noemailRemindText = () => {
    this.setState({
      emailRemindText: '',
    })
  }
  nounicodeRemindText = () => {
    this.setState({
      unicodeRemindText: '',
    })
  }
  checkEmail = evt => {
    if (evt.target.value !== '') {
      let email = evt.target.value
      let data = { email: evt.target.value }
      fetch('//13.112.90.13:3002/firm/emailCheck', {
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
            this.setState({ emailRemindText: obj.data.message })
          }
        })
    }
  }
  checkAccount = evt => {
    if (evt.target.value !== '') {
      let account = evt.target.value
      let data = { account: evt.target.value }
      fetch('//13.112.90.13:3002/firm/accountCheck', {
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
            this.setState({ accountRemindText: obj.data.message })
          }
        })
    }
  }
  checkPassword = evt => {
    if (evt.target.value.length > 0 && evt.target.value.length < 8) {
      this.setState({ remindText: '密碼需8碼以上!' })
      this.inputPassword.value = ''
    } else {
      this.setState({ password: evt.target.value })
    }
  }
  checkPasswordAgain = evt => {
    if (evt.target.value !== '') {
      this.setState({ passwordCheck: evt.target.value })
      if (this.state.passwordCheck !== this.state.password) {
        this.setState({ remindText2: '密碼不一致!' })
        this.inputPassword.value = ''
        this.inputPassword2.value = ''
      }
    }
  }
  FirmRegisterRequest = evt => {
    if (this.refs.submitForm.reportValidity()) {
      evt.preventDefault()
      var data = {
        account: this.state.account,
        password: this.state.password,
        unicode: this.state.unicode,
        email: this.state.email,
      }
      fetch('//13.112.90.13:3002/firm/firmRegister', {
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
            this.props.registerSuccess()
            localStorage.setItem('account', obj.data.body.account)
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
                  placeholder="輸入帳號"
                  className="account form-control"
                  onBlur={this.checkAccount}
                  onFocus={this.noaccountRemindText}
                  required
                  ref={el => (this.inputaccount = el)}
                />
                <Form.Text className="red">
                  {this.state.accountRemindText}
                </Form.Text>
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
                  onFocus={this.noremindText}
                  required
                  ref={el => (this.inputPassword = el)}
                />
                <Form.Text className="red">{this.state.remindText}</Form.Text>
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
                  onFocus={this.noremindText2}
                  required
                  ref={el => (this.inputPassword2 = el)}
                />
                <Form.Text className="red">{this.state.remindText2}</Form.Text>
              </Form.Group>
              <label htmlFor="uniform">信箱</label>
              <input
                className="pl-3"
                name="uniform"
                type="email"
                required
                onFocus={this.noemailRemindText}
                onBlur={this.checkEmail}
                ref={el => (this.inputemail = el)}
              />
              <Form.Text className="red mb-2">
                {this.state.emailRemindText}
              </Form.Text>
              <label htmlFor="uniform">統編</label>
              <input
                className="pl-3"
                name="uniform"
                type="number"
                required
                onFocus={this.nounicodeRemindText}
                onBlur={this.checkunicode}
                ref={el => (this.inputunicode = el)}
              />
              <Form.Text className="red mb-2">
                {this.state.unicodeRemindText}
              </Form.Text>
              <button
                type="submit"
                className="button button--lg"
                onClick={this.FirmRegisterRequest}
              >
                註冊
              </button>
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

export default FirmRegisterModal
