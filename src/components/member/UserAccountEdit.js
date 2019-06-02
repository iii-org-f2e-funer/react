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
      gender: this.props.data.gender,
      email: this.props.data.email,
      birthday: this.props.data.birthday,
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
      gender: this.state.gender,
      mobile: this.state.mobile,
      city: this.state.city,
      site: this.state.site,
      street: this.state.street,
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
          this.props.redirect()
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
        {/* gender */}
        <div className="flex mb-3">
          <label className="col-2">性別</label>
          <div className="form-check member">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="男"
              checked={this.state.gender === '男'}
              onChange={e => this.setState({ gender: e.target.value })}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              男
            </label>
          </div>
          <div className="form-check ml-5 member">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="女"
              checked={this.state.gender === '女'}
              onChange={e => this.setState({ gender: e.target.value })}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              女
            </label>
          </div>
        </div>

        {/* mail */}
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
                'form-control zipcode d-none',
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
            type="date"
            value={this.state.birthday}
            onChange={e => this.setState({ birthday: e.target.value })}
          />
        </div>

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
      </>
    )
  }
}

export default UserAccountEdit
