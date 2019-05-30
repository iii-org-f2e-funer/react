// 訂單
import React from 'react'
import { withRouter } from 'react-router'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import Account from '../../components/firm/Account'

class UserShopping extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data1: [],
    }
  }

  componentDidMount() {
    fetch('//localhost:3002/member/productorder', {})
      //fetch prodct_manage
      .then(response => {
        // 這裡會得到一個 ReadableStream 的物件
        // console.log(response)
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json()
      })
      .then(jsonData => {
        this.setState({ data: jsonData })
        var d2_leng = Object.keys(jsonData).length
        var aa = []
        // for (let i = d2_leng - 1; i >= 0; i--) {
        //   if (this.props.userInfo.account == jsonData[i]) {
        //     aa.push(jsonData[i])
        //   }
        // }
        console.log(jsonData)
        console.log(aa)
        // typeof()
        // console.log(this.state.data)
      })
      .catch(err => {
        // console.log('錯誤:', err)
      })
  }
  render() {
    return (
      <>
        <h5>訂單查詢</h5>
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
  )(UserShopping)
)
