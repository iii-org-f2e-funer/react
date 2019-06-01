import React from 'react'
import { Modal, Form, Col, Row } from 'react-bootstrap'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import FirmEditInput from './FirmEditInput'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insert: true,
      member_id: '',
      memberData: {
        member_id: '',
        account: '',
        password: '',
        email: '',
        name: '',
        nickname: '',
        birthday: '',
        mobile: '',
        intro: '',
        city: '',
        site: '',
        street: '',
        absence: '',
        participation: '',
        account_status: '',
        create_date: '',
        photo: '',
      },
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/member/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            memberData: Object.assign(this.state.memberData, obj.body),
            member_id: obj.member_id,
            insert: false,
            img: obj.img,
          })
        } else {
          this.setState({ member_id: obj.member_id })
        }
      })
  }

  cancelEdit = () => {
    fetch('//localhost:3002/member/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log(obj)
          this.setState({
            memberData: Object.assign(this.state.memberData, obj.body),
            member_id: obj.member_id,
            insert: false,
          })
        } else {
          console.log(obj)
          this.setState({ member_id: obj.member_id })
        }
      })
    this.props.handleHide()
  }

  render() {
    return (
      <>
        <Modal
          className="memberEdit"
          show={this.props.editPopup}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        />
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
  )(AccountEdit)
)
