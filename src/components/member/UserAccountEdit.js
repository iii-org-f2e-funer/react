// 帳號設定編輯
import React from 'react'
import TWzipcode from 'react-twzipcode'

class UserAccountEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      member_id: this.props.data.member_id,
      account: this.props.data.account,
      name: this.props.data.name,
      mobile: this.props.data.mobile,
      city: this.props.data.city,
      site: this.props.data.site,
      street: this.props.data.street,
      nickname: this.props.data.nickname,
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
  UserUpdateAccount = () => {
    const data = {
      member_id: this.state.member_id,
      account: this.state.account,
      name: this.state.name,
      mobile: this.state.mobile,
      city: this.state.city,
      site: this.state.site,
      street: this.state.street,
      nickname: this.state.nickname,
      email: this.state.email,
      birthday: this.state.birthday,
    }
    //  -------------------
    fetch('//localhost:3002/member/memberEdit', {
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
      member_id: this.state.member_id,
      password: this.state.password,
    }
    fetch('//localhost:3002/member/passwordEdit', {
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
          <label className="col-2">會員帳號</label>
          <div className="col-7 account">{this.state.account}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">會員名稱</label>
          <input
            type="text"
            className="col-7"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="flex mb-3">
          <label className="col-2">暱稱</label>
          <input
            type="text"
            className="col-7"
            value={this.state.nickname}
            onChange={e => this.setState({ nickname: e.target.value })}
          />
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
          <label className="col-2">手機號碼</label>
          <input
            className="col-7"
            type="text"
            value={this.state.mobile}
            onChange={e => this.setState({ mobile: e.target.value })}
          />
        </div>
        <div className="flex mb-3">
          <label className="col-2">地址</label>
          <div>
            <TWzipcode
              countyFieldName="pt_city"
              districtFieldName="pt_dist"
              countyValue={this.state.city}
              districtValue={this.state.site}
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
              value={this.state.street}
              onChange={e => this.setState({ street: e.target.value })}
            />
          </div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">生日</label>
          <input
            className="col-7"
            type="text"
            value={this.state.birthday}
            onChange={e => this.setState({ birthday: e.target.value })}
          />
        </div>

        {/* <div className="flex mb-3">
          <label className="col-2">負責人</label>
          <input
            type="text"
            className="col-7"
            value={this.state.contacter}
            onChange={e => this.setState({ contacter: e.target.value })}
          />
        </div> */}

        {/* password */}
        <button className="button mt-3 mr-3" onClick={this.UserUpdateAccount}>
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

export default UserAccountEdit
