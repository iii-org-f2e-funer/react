import React from 'react'
import TWzipcode from 'react-twzipcode'
import { Form } from 'react-bootstrap'
class AccountEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: this.props.data.account,
      firmname: this.props.data.firmname,
      phone: this.props.data.phone,
      city: this.props.data.city,
      dist: this.props.data.dist,
      address: this.props.data.address,
      contacter: this.props.data.contacter,
      email: this.props.data.email,
      ori_password: '',
      password: '',
      password2: '',
      remindText: '',
    }
  }
  noremindText = () => {
    this.setState({
      remindText: '',
    })
  }
  handlecityChange = evt =>
    this.setState({
      city: evt.county,
    })
  handledistChange = evt =>
    this.setState({
      dist: evt.district,
    })
  ori_password = evt => {
    if (evt.target.value.length > 0 && evt.target.value.length < 8) {
      this.setState({ remindText: '原密碼需8碼以上' })
      this.ori_password.value = ''
    }
    this.setState({ ori_password: evt.target.value })
  }
  checkPassword = evt => {
    if (evt.target.value.length > 0 && evt.target.value.length < 8) {
      this.setState({ remindText: '密碼需8碼以上' })
      this.inputPassword.value = ''
    } else {
      this.setState({ password: evt.target.value })
    }
  }
  checkPasswordAgain = evt => {
    if (evt.target.value !== '') {
      this.state.passwordCheck = evt.target.value
      if (this.state.password2 !== this.state.password) {
        this.setState({ remindText: '密碼不一致' })
        this.inputPassword.value = ''
        this.inputPassword2.value = ''
        this.setState({ password: '', password2: '' })
      }
    }
  }
  updateAccount = () => {
    const data = {
      sid: this.props.data.sid,
      account: this.state.account,
      firmname: this.state.firmname,
      phone: this.state.phone,
      city: this.state.city,
      dist: this.state.dist,
      address: this.state.address,
      contacter: this.state.contacter,
      email: this.state.email,
    }
    fetch('//13.112.90.13:3002/firm/firmEdit', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.props.cancelEdit()
        } else {
          alert(obj.massage)
          this.props.cancelEdit()
        }
      })
  }
  updatePassword = () => {
    const data = {
      sid: this.props.data.sid,
      ori_password: this.state.ori_password,
      password: this.state.password,
    }
    fetch('//13.112.90.13:3002/firm/passwordEdit', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          alert('密碼修改成功!')
          this.props.cancelEdit()
        } else {
          this.setState({ remindText: obj.message })
          this.ori_password.value = ''
          this.inputPassword.value = ''
          this.inputPassword2.value = ''
          this.setState({ ori_password: '', password: '', password2: '' })
        }
      })
  }

  render() {
    return (
      <>
        <div className="flex mb-3">
          <label className="col-2">店家帳號</label>
          <div className="col-7 account">{this.state.account}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">店家名稱</label>
          <input
            type="text"
            className="col-7"
            value={this.state.firmname}
            onChange={e => this.setState({ firmname: e.target.value })}
          />
        </div>
        <div className="flex mb-3">
          <label className="col-2">店家電話</label>
          <input
            className="col-7"
            type="text"
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })}
          />
        </div>
        <div className="flex mb-3">
          <label className="col-2">店家地址</label>
          <div className="address_outter">
            <TWzipcode
              countyFieldName="pt_city"
              districtFieldName="pt_dist"
              countyValue={this.state.city}
              districtValue={this.state.dist}
              css={[
                'form-control county-sel code',
                'form-control district-sel code ml-2',
                'form-control zipcode d-none',
              ]}
              handleChangeCounty={this.handlecityChange}
              handleChangeDistrict={this.handledistChange}
            />
            <input
              className="addressinput mt-2"
              type="text"
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </div>
        </div>

        <div className="flex mb-3">
          <label className="col-2">電子信箱</label>
          <input
            type="email"
            className="col-7"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="flex mb-3">
          <label className="col-2">負責人</label>
          <input
            type="text"
            className="col-7"
            value={this.state.contacter}
            onChange={e => this.setState({ contacter: e.target.value })}
          />
        </div>
        <button className="button mt-3 mr-3" onClick={this.updateAccount}>
          確認更改
        </button>
        <button
          className="button button-white mt-3 mb-5"
          onClick={this.props.cancelEdit}
        >
          取消變更
        </button>
        <h5>修改密碼</h5>
        <hr />
        <div className="flex mb-3 login-form">
          <label className="col-2">原密碼</label>
          <input
            type="password"
            className="col-3 pl-3"
            onFocus={this.noremindText}
            onBlur={this.ori_Password}
            ref={el => (this.ori_password = el)}
            onChange={e => this.setState({ ori_password: e.target.value })}
          />
        </div>
        <div className="flex mb-3 login-form">
          <label className="col-2">新密碼</label>
          <input
            type="password"
            className="col-3 pl-3"
            value={this.state.password}
            onFocus={this.noremindText}
            onBlur={this.checkPassword}
            ref={el => (this.inputPassword = el)}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="flex mb-3 login-form">
          <label className="col-2">確認密碼</label>
          <input
            type="password"
            className="col-3 pl-3"
            value={this.state.password2}
            onFocus={this.noremindText}
            onBlur={this.checkPasswordAgain}
            ref={el => (this.inputPassword2 = el)}
            onChange={e => this.setState({ password2: e.target.value })}
          />
        </div>
        <Form.Text className="red">{this.state.remindText}</Form.Text>
        <button className="button mt-3 mr-3" onClick={this.updatePassword}>
          確認更改密碼
        </button>
      </>
    )
  }
}

export default AccountEdit
