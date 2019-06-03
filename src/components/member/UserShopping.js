// 訂單
import React from 'react'
import { withRouter } from 'react-router'
import actions from '../../redux/action/userInfo.js'
import { connect } from 'react-redux'
import '../../styles/cart/cart.scss'
import { Button, Table, InputGroup } from 'react-bootstrap'
// import '../../styles/cart/cart.scss'
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
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        var aa = []
        console.log(jsonData)
        console.log(this.props.userInfo.account)
        for (let i = 0; i < jsonData.length; i++) {
          if (jsonData[i].login_user_sid == this.props.userInfo.account) {
            if (jsonData[i].getmethod == 'tohome') {
              jsonData[i].getmethod = '宅配'
            } else {
              jsonData[i].getmethod = '超商取貨'
            }
            jsonData[i].cre_date = jsonData[i].cre_date.slice(0, 16)
            aa.push(jsonData[i])
          }
        }
        console.log(aa)
        this.setState({
          data1: aa,
        })
      })
  }
  render() {
    return (
      <>
        <h5>訂單查詢</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  {' '}
                  <th scope="col">date</th>
                  <th scope="col">訂單編號</th>
                  <th scope="col">訂購人姓名</th>
                  <th scope="col">收貨方法</th>
                  <th scope="col">付款方式</th>
                  <th scope="col">我要退貨</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data1.map((item, index, array) => (
                  <tr>
                    {' '}
                    <td className="name">{this.state.data1[index].cre_date}</td>
                    <td className="name">
                      {this.state.data1[index].order_sid}
                    </td>
                    <td className="name">
                      {this.state.data1[index].order_name}
                    </td>
                    <td className="name">
                      {this.state.data1[index].getmethod}
                    </td>
                    <td className="name">
                      {this.state.data1[index].paymethod}
                    </td>{' '}
                    <td>
                      <button className="button-white button">退貨</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
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
