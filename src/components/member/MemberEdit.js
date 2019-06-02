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
      UserData: {
        member_id: '',
        nickname: '',
        gender: '',
        city: '',
        member_favorite: '',
        intro: '',
      },
    }
  }
  // componentDidMount() {
  //   fetch('//localhost:3002/firm/userInfo', {
  //     credentials: 'include',
  //   })
  //     .then(res => res.json())
  //     .then(obj => {
  //       if (obj.success) {
  //         this.setState({
  //           UserData: Object.assign(this.state.UserData, obj.body),
  //         })
  //         console.log(this.state.UserData)
  //       } else {
  //         alert('會員資訊獲取失敗')
  //       }
  //     })
  // }
  cancelEdit = () => {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            UserData: Object.assign(this.state.UserData, obj.body),
          })
        } else {
          alert('會員資訊獲取失敗')
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
  )(AccountEdit)
)
