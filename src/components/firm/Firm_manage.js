import React from 'react'

class Firm_manage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
    }
  }
  getUserName = () => {
    fetch('//localhost:3002/UserInfo', {})
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
      })
  }

  render() {
    return (
      <>
        <div className="manage_info">
          <h5>帳號設定及店家資料</h5>
          <hr />
          <button onClick={this.getUserName}>sss</button>
        </div>
      </>
    )
  }
}

export default Firm_manage
