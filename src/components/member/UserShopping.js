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
        for (let i = 0; i < d2_leng; i++) {
          if (this.props.userInfo.account == jsonData[i].login_user_sid) {
            aa.push(jsonData[i])
          }
        }
        console.log(this.props.userInfo.account)
        console.log(jsonData)
        console.log(aa)
        this.setState({
          data1: aa,
        })
      })
      .catch(err => {
        // console.log('錯誤:', err)
      })
  }
  render() {
    return (
      <>
        <h5>訂單查詢</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">訂單編號</th>
              <th scope="col">訂購人姓名</th>
              <th scope="col">收貨方法</th>
              <th scope="col">付款方式</th>
              <th scope="col">我要退貨</th>
              <th scope="col">date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data1.map((item, index, array) => (
              <tr>
                <td key={index}>{index + 1}</td>
                <td>{this.state.data[index].order_sid}</td>
                <td>{this.state.data[index].order_name}</td>
                <td>{this.state.data[index].getmethod}</td>
                <td>{this.state.data[index].paymethod}</td>
                <td>{this.state.data[index].cre_date}</td>
                <td>
                  <a href="#">退貨</a>
                </td>
                {/* <td>{this.state.data[index].number}</td> */}
                {/* <td>{this.state.data[index].totall}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
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
