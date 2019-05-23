import React from 'react'
import { Table } from 'react-bootstrap'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/firm/userInfo')
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        if (obj.success) {
          this.setState({ data: obj.body })
        }
      })
  }

  render() {
    const data = this.state.data
    return (
      <>
        <h5>帳號設定及店家資料</h5>
        <hr />
        <div className="flex mb-3">
          <label className="col-2">店家帳號</label>
          <div className="col-7">{data.account}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">店家名稱</label>
          <div className="col-7">{data.firmname}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">店家電話</label>
          <div className="col-7">{data.phone}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">店家地址</label>
          <div className="col-7">{data.address}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">電子信箱</label>
          <div className="col-7">{data.email}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">負責人</label>
          <div className="col-7">{data.contacter}</div>
        </div>
        <div className="flex mb-3">
          <label className="col-2">負責人手機</label>
          <div className="col-7">{data.phone}</div>
        </div>

        <button className="button mt-3">編輯帳號設定</button>
      </>
    )
  }
}

export default Account
