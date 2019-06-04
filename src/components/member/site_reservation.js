// 場地查詢
import React from 'react'
import { withRouter } from 'react-router'
import { Button, Table, InputGroup } from 'react-bootstrap'
import moment from 'moment'
import '../../styles/cart/cart.scss'
import '../../styles/cart/cart.scss'

require('moment-timezone')

class site_reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      data: [],
    }
    this.statusCode = this.statusCode.bind(this)
    this.checkCancel = this.checkCancel.bind(this)
  }

  statusCode(code) {
    switch (code) {
      case 0:
        return '待確認'
      case 1:
        return '已確認'
      case 2:
        return '已完成'
      case 9:
        return '已取消'
    }
  }

  checkCancel(sid) {
    let r = window.confirm('取消此場地預定訂單?')

    if (r === true) {
      fetch('//13.112.90.13:3002/reservationInfo', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sid: sid,
          status: 9,
        }),
      }).then(() => {
        this.readData()
      })
    } else {
      return
    }
  }

  readData() {
    fetch('//13.112.90.13:3002/reservationInfo', {
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

  componentDidMount() {
    this.readData()
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
                  <th>預約單編號</th>
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
                    <td>{item.sid}</td>
                    <td>
                      {moment(item.date)
                        .utcOffset(960)
                        .format('YYYY-MM-DD')}
                    </td>
                    <td className="name">
                      {moment(item.date)
                        .utcOffset(960)
                        .format('HH:mm')}
                    </td>
                    <td>{item.site_name}</td>
                    <td className="">{this.statusCode(item.status)}</td>
                    <td>
                      {item.status === 0 ? (
                        <button
                          className="m-1 button button"
                          block
                          onClick={() => this.checkCancel(item.sid)}
                        >
                          取消
                        </button>
                      ) : (
                        '--'
                      )}
                    </td>
                    <td className="todo">--</td>
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
