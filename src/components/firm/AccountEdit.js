import React from 'react'
import TWzipcode from 'react-twzipcode'

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
      password: '',
      password2: '',
    }
  }
  handlecityChange = evt =>
    this.setState({
      city: evt.county,
    })
  handledistChange = evt =>
    this.setState({
      dist: evt.district,
    })

  checkPassword = evt => {
    if (evt.target.value.length > 0 && evt.target.value.length < 8) {
      alert('密碼需8碼以上')
      this.inputPassword.value = ''
    }
    this.setState({ password: evt.target.value })
  }
  checkPasswordAgain = evt => {
    if (evt.target.value !== '') {
      this.state.passwordCheck = evt.target.value
      if (this.state.password2 !== this.state.password) {
        alert('密碼不一致!')
        this.inputPassword.value = ''
        this.inputPassword2.value = ''
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
    fetch('//localhost:3002/firm/firmEdit', {
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
      password: this.state.password,
    }
    fetch('//localhost:3002/firm/passwordEdit', {
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
          <div>
            <TWzipcode
              countyFieldName="pt_city"
              districtFieldName="pt_dist"
              countyValue={this.state.city}
              districtValue={this.state.dist}
              css={[
                'form-control county-sel',
                'form-control district-sel',
                'form-control zipcode',
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
          <label className="col-2">新密碼</label>
          <input
            type="password"
            className="col-3 pl-3"
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
            onBlur={this.checkPasswordAgain}
            ref={el => (this.inputPassword2 = el)}
            onChange={e => this.setState({ password2: e.target.value })}
          />
        </div>
        <button className="button mt-3 mr-3" onClick={this.updatePassword}>
          確認更改密碼
        </button>
      </>
    )
  }
}

export default AccountEdit