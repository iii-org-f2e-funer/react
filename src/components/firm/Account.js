import React from 'react'
import { withRouter } from 'react-router'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isEdit: false,
      inputText: '',
      account: '',
      firmname: '',
      phone: '',
      address: '',
      contacter: '',
      email: '',
      password: '',
      password2: '',
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          console.log(obj)
          this.setState({
            data: obj.body,
            account: obj.body.account,
            firmname: obj.body.firmname,
            phone: obj.body.phone,
            address: obj.body.address,
            email: obj.body.email,
            contacter: obj.body.contacter,
          })
        } else {
          this.props.history.push('/')
        }
      })
  }
  edit = () => {
    this.setState({ isEdit: true })
  }
  closeEdit = () => {
    this.setState({ isEdit: false })
  }
  onChange = evt => {
    this.setState({ editText: evt.target.value })
  }

  render() {
    return (
      <>
        <h5>帳號設定及店家資料</h5>
        <hr />
        {this.state.isEdit ? (
          <div>
            <div className="flex mb-3">
              <label className="col-2">店家帳號</label>
              <input
                type="text"
                className="col-7"
                value={this.state.account}
                onChange={this.onChange}
              />
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家名稱</label>
              <input
                type="text"
                className="col-7"
                value={this.state.firmname}
              />
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家電話</label>
              <input type="text" className="col-7" value={this.state.phone} />
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家地址</label>
              <input type="text" className="col-7" value={this.state.address} />
            </div>
            <div className="flex mb-3">
              <label className="col-2">電子信箱</label>
              <input type="email" className="col-7" value={this.state.email} />
            </div>
            <div className="flex mb-3">
              <label className="col-2">負責人</label>
              <input
                type="text"
                className="col-7"
                value={this.state.contacter}
              />
            </div>
            <div className="flex mb-3">
              <label className="col-2">新密碼</label>
              <input
                type="text"
                className="col-7"
                value={this.state.password}
              />
            </div>
            <div className="flex mb-3">
              <label className="col-2">確認密碼</label>
              <input
                type="text"
                className="col-7"
                value={this.state.password2}
              />
            </div>
            <button className="button mt-3" onClick={this.closeEdit}>
              確認更改
            </button>
            <button className="button mt-3" onClick={this.closeEdit}>
              取消變更
            </button>
          </div>
        ) : (
          <div>
            <div className="flex mb-3">
              <label className="col-2">店家帳號</label>
              <div className="col-7">{this.state.account}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家名稱</label>
              <div className="col-7">{this.state.firmname}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家電話</label>
              <div className="col-7">{this.state.phone}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">店家地址</label>
              <div className="col-7">{this.state.address}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">電子信箱</label>
              <div className="col-7">{this.state.email}</div>
            </div>
            <div className="flex mb-3">
              <label className="col-2">負責人</label>
              <div className="col-7">{this.state.contacter}</div>
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
