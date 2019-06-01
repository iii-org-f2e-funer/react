//帳號設定部分
import React from 'react'
import { withRouter } from 'react-router'
import UserAccountEdit from './UserAccountEdit.js'

class UserAccount extends React.Component {
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
        <h5>會員帳號設定</h5>
        <hr />
        {this.state.isEdit ? (
          <UserAccountEdit
            data={this.state.data}
            cancelEdit={this.cancelEdit}
          />
        ) : (
          <div>
            <div className="flex mb-3">
              <label className="col-2">會員帳號</label>
              <div className="col-7 ">{this.state.data.account}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">會員名稱</label>
              <div className="col-7">{this.state.data.name}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">暱稱</label>
              <div className="col-7">{this.state.data.nickname}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">性別</label>
              <div className="col-7">{this.state.data.gender}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">電子信箱</label>
              <div className="col-7">{this.state.data.email}</div>
            </div>  
            <div className="flex mb-3">
              <label className="col-2">手機號碼</label>
              <div className="col-7">{this.state.data.mobile}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">地址</label>
              <div className="col-7">
                {this.state.data.city +
                  this.state.data.site +
                  this.state.data.street}
              </div>
            </div>

            <div className="flex mb-3">
              <label className="col-2">生日</label>
              <div className="col-7">{this.state.data.birthday}</div>
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

export default withRouter(UserAccount)
