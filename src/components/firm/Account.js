import React from 'react'
import { withRouter } from 'react-router'
import AccountEdit from './AccountEdit.js'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      data: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            data: obj.body,
          })
        } else {
          this.props.history.push('/')
        }
      })
  }
  edit = () => {
    this.setState({ isEdit: true })
  }

  cancelEdit = () => {
    this.setState({ isEdit: false })
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            data: obj.body,
          })
        } else {
          this.props.history.push('/')
        }
      })
  }

  render() {
    return (
      <>
        <h5>帳號設定及店家資料</h5>
        <hr />
        {this.state.isEdit ? (
          <AccountEdit data={this.state.data} cancelEdit={this.cancelEdit} />
        ) : (
          <div className="accountInfo">
            <div className="flex mb-3">
              <label className="col-2">店家帳號</label>
              <div className="col-7">{this.state.data.account}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家名稱</label>
              <div className="col-7">{this.state.data.firmname}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家電話</label>
              <div className="col-7">{this.state.data.phone}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家地址</label>
              <div className="col-7">
                {this.state.data.city +
                  this.state.data.dist +
                  this.state.data.address}
              </div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">電子信箱</label>
              <div className="col-7">{this.state.data.email}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">負責人</label>
              <div className="col-7">{this.state.data.contacter}</div>
            </div>

            <button className="button mt-3" onClick={this.edit}>
              編輯帳號設定
            </button>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Account)
