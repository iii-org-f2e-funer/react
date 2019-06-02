import React from 'react'
import { Modal, Form, Col, Row } from 'react-bootstrap'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class userEditInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      data: [],
      intro: '',
    }
  }

  componentDidMount() {
    fetch('//localhost:3002/member/userPublicInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        // console.log(obj)
        this.setState({
          nickname: obj.nickname,
          data: obj.data,
          intro: obj.intro,
        })
      })
  }

  nicknameChange = e => {
    this.setState({ nickname: e.target.value })
  }

  handleCheck = type_id => () => {
    var new_data = [...this.state.data]
    new_data[type_id - 1].isFav = !new_data[type_id - 1].isFav
    this.setState({ data: new_data })
  }

  handleSubmit = event => {
    var data = {
      nickname: this.state.nickname,
      data: this.state.data,
      intro: this.state.intro,
    }

    event.preventDefault()
    event.stopPropagation()
    fetch('//localhost:3002/member/editUserPublicInfo', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.props.handleHide()
        }
      })
  }
  render() {
    return (
      <>
        <Form onSubmit={e => this.handleSubmit(e)} ref={el => (this.form = el)}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              暱稱
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.nickname}
                onChange={this.nicknameChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              擅長遊戲
            </Form.Label>
            <Col sm={10}>
              {this.state.data.map(item => (
                <div
                  key={item.type_id}
                  className={item.isFav ? 'GameType check' : 'GameType'}
                >
                  <input
                    id={item.type_id}
                    type="checkbox"
                    value={item.type_id}
                    checked={item.isFav}
                    onChange={this.handleCheck(item.type_id)}
                  />
                  <label htmlFor={item.type_id}>{item.type_name}</label>
                </div>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              關於我
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows="8"
                value={this.state.intro}
                onChange={e => this.setState({ intro: e.target.value })}
              />
              <p className="color-grey remindText">
                * 提醒您，豐富的自我介紹可以提高參團及揪團成功的機率哦!
              </p>
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <button className="button mt-3 mr-3">確認更改</button>
            <div
              className="button button-white mt-3"
              onClick={this.props.handleHide}
            >
              取消變更
            </div>
          </div>
        </Form>
      </>
    )
  }
}

function mapStateToProp(store) {
  return {
    userInfo: store.userInfo,
  }
}

export default withRouter(
  connect(
    mapStateToProp,
    {
      userInfoAction: actions.userInfo,
    }
  )(userEditInput)
)
