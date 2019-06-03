import React from 'react'
import { Modal } from 'react-bootstrap'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FirmEditInput from './FirmEditInput'

class FirmEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insert: true,
      firm_id: '',
      firmData: {
        sid: '',
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
    fetch('//13.112.90.13:3002/firm/firmInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log(obj.img)
          this.setState({
            firmData: Object.assign(this.state.firmData, obj.body),
            firm_id: obj.firm_id,
            insert: false,
            img: obj.img,
          })
        } else {
          this.setState({ firm_id: obj.firm_id })
        }
      })
  }
  cancelEdit = () => {
    fetch('//13.112.90.13:3002/firm/firmInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log(obj)
          this.setState({
            firmData: Object.assign(this.state.firmData, obj.body),
            firm_id: obj.firm_id,
            insert: false,
          })
        } else {
          console.log(obj)
          this.setState({ firm_id: obj.firm_id })
        }
      })
    this.props.handleHide()
  }
  render() {
    if (!this.props.data) {
      return null
    }
    return (
      <>
        <Modal
          className="firmEdit"
          show={this.props.editPopup}
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <h4 className="text-center mb-4">桌遊地圖公開資訊</h4>
          <FirmEditInput
            firmData={this.state.firmData}
            cancelEdit={this.cancelEdit}
            insert={this.state.insert}
            firm_id={this.state.firm_id}
            img={this.state.img}
            data={this.props.data}
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
  )(FirmEdit)
)
