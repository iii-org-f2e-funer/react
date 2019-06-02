// 場地查詢
import React from 'react'
import { withRouter } from 'react-router'
import { Button, Table, InputGroup } from 'react-bootstrap'
import '../../styles/cart/cart.scss'
import '../../styles/cart/cart.scss'

class site_reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      data: [],
    }
  }
  componentDidMount() {
    fetch('//localhost:3002/reservationInfo', {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(obj => {
        if (obj.success) {
          this.setState({
            data: obj.body,
          })
        } else {
          // this.props.history.push('/')
        }
      })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <div className="cart">
          <div className="myfav-table">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>預約店家</th>
                  <th>處裡進度</th>
                  <th>取消預定</th>
                  <th>評價</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index) => (
                  <tr key={item.sid}>
                    <td>
                      {new Date(item.date).getFullYear()}-
                      {new Date(item.date).getMonth() + 1}-
                      {new Date(item.date).getDay() + 1}
                    </td>
                    <td className="name">
                      {new Date(item.date).getHours()}:
                      {new Date(item.date).getMinutes()}
                    </td>
                    <td>{item.site_name}</td>
                    <td className="">{item.status}</td>
                    <td>取消預定</td>
                    <td className="todo">評價</td>
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

export default withRouter(site_reservation)
