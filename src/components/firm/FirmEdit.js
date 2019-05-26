import React from 'react'
import { Modal, Form, Col, Row } from 'react-bootstrap'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FirmEditInput from './FirmEditInput'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firmData: {
        sid: '',
        firm_id: '',
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
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/firmInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            firmData: Object.assign(this.state.firmData, obj.body),
          })
          console.log(this.state.firmData)
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
          <h4 className="text-center">店家基本資訊</h4>
          <FirmEditInput
            firmData={this.state.firmData}
            cancelEdit={this.props.handleHide}
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
