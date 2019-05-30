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
      memberData: {
        member_sid: '',
        account: '',
        store: '',
        county: '',
        dist: '',
        address: '',
        mobile: '',
        business_hours: '',
        public_holiday: '',
        charges: '',
        about: '',
        rule: '',
        status: '',
      },
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/member/member', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            memberData: Object.assign(this.state.memberData, obj.body),
          })
          console.log(this.state.memberData)
        } else {
          console.log(obj.message)
        }
      })
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
          {/* <h4 className="text-center">店家基本資訊</h4>
          <FirmEditInput
            firmData={this.state.firmData}
            cancelEdit={this.props.handleHide}
          /> */}
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
