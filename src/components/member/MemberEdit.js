import React from 'react'
import { Modal } from 'react-bootstrap'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import UserEditInput from './UserEditInput'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insert: true,
      member_id: '',
      UserData: {
        member_id: '',
        store: '',
        county: '',
        dist: '',
        address: '',
        phone: '',
        business_hours: '',
        public_holiday: '',
        charges: '',
        about: '',
        rule: '',
        status: '',
      },
      img: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/firmInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log(obj.img)
          this.setState({
            UserData: Object.assign(this.state.UserData, obj.body),
            member_id: obj.firm_id,
            insert: false,
            img: obj.img,
          })
        } else {
          this.setState({ firm_id: obj.firm_id })
        }
      })
  }
  cancelEdit = () => {
    fetch('//localhost:3002/member/memberInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log(obj)
          this.setState({
            UserData: Object.assign(this.state.UserData, obj.body),
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
          className="firmEdit"
          show={this.props.editPopup}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <h4 className="text-center">個人基本資訊</h4>
          <UserEditInput
            UserData={this.state.UserData}
            cancelEdit={this.cancelEdit}
            insert={this.state.insert}
            firm_id={this.state.firm_id}
            img={this.state.img}
          />
        </Modal>
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
