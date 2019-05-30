import React from 'react'
import queryString from 'query-string'
import { Form, Col, Row } from 'react-bootstrap'

class CheckCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islive: '',
      data: [],
    }
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    const code = values.code
    console.log(code)
    const data = { code: code }
    fetch('//localhost:3002/firm/checkCode', {
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
        if (obj.success) {
          this.setState({ islive: true, data: obj.body })
        } else {
        }
      })
  }
  render() {
    return (
      <>
        <div className="codeCheck mt-5">
          {this.state.islive ? (
            <>
              <h2 className="text-center mb-3">恭喜成為FUNer會員</h2>
              <Form className="code_form">
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    店家
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={this.state.data.firmname}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
            </>
          ) : (
            <h2>帳號認證失敗</h2>
          )}
        </div>
      </>
    )
  }
}

export default CheckCode
