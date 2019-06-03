import React from 'react'
import { Button, Table } from 'react-bootstrap'
import moment from 'moment'
require('moment-timezone')

class Site_order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      data: [],
      viewChange: 1,
    }

    this.statusCode = this.statusCode.bind(this)
    this.checkOK = this.checkOK.bind(this)
  }
  statusCode(code) {
    switch (code) {
      case 0:
        return '待審核'
      case 1:
        return '已審核'
      case 2:
        return '已完成'
      case 9:
        return '已取消'
    }
  }

  checkOK(sid) {
    let r = window.confirm('確認此場訂預定訂單?')

    if (r === true) {
      fetch('//localhost:3002/reservationInfo', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sid: sid,
          status: 1,
        }),
      }).then(() => {
        this.readData()
      })
    } else {
      return
    }
  }

  readData() {
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

  componentDidMount() {
    this.readData()
  }

  render() {
    return (
      <>
        <h5>場地訂單</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  <th>預約單編號</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>預約帳號</th>
                  <th>預約人數</th>
                  <th>訂單狀態</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index, array) => (
                  <tr key={item.sid}>
                    <td>{item.sid}</td>
                    <td>
                      {moment(item.date)
                        .utcOffset(960)
                        .format('YYYY-MM-DD')}
                    </td>
                    <td>
                      {moment(item.date)
                        .utcOffset(960)
                        .format('HH:mm')}
                    </td>
                    <td>{item.user_id}</td>
                    <td>{item.peoples}</td>
                    <td>{this.statusCode(item.status)}</td>
                    <td>
                      <button
                        className="m-1 button button"
                        block
                        onClick={'this.goto(this.state.data[index].sid)'}
                      >
                        詳細資料
                      </button>

                      {item.status === 0 ? (
                        <button
                          className="m-1 button button"
                          block
                          onClick={() => this.checkOK(item.sid)}
                        >
                          確認
                        </button>
                      ) : (
                        ''
                      )}
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

export default Site_order
