import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

class LoginInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      accountCheck: false,
      passwordCheck: false
    }
  }
  checkAccount = (evt) => {
    this.state.account = evt.target.value;
    if (evt.target.value === '') {
      this.setState({ accountCheck: false })
      return
    }
    this.setState({ accountCheck: true })
  }
  checkPassword = (evt) => {
    this.state.password = evt.target.value;
    if (evt.target.value === '') {
      this.setState({ passwordCheck: false })
      return
    }
    this.setState({ passwordCheck: true })
  }
  sendFirmRequest = () => {
    var data = {
      account: this.state.account,
      password: this.state.password
    }
    fetch('//localhost:3001/firmLogin', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
      })
  }
  render() {
    return (
      <>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail" className="login-control">
            <i class="fa fa-user"></i>
            <input
              type="text"
              placeholder="Enter email"
              className="account form-control"
              onBlur={this.checkAccount} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="login-control">
            <i class="fa fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="password"
              onBlur={this.checkPassword} />
          </Form.Group>
          <Button
            variant="primary"
            className="button button--lg"
            onClick={this.sendFirmRequest}
          >登入</Button>

        </Modal.Body>
      </>
    )
  }

}

export default LoginInput