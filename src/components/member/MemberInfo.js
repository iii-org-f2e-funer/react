import React from 'react'
import '../../styles/member/member.scss'
import { Table } from 'react-bootstrap'

const MemberInfo = () => {
  // 抓後台資料

  return (
    <div className="info">
      <Table>
        <thead>
          <h4 className="col-3">個人資料</h4>
        </thead>
        <tbody>
          <tr>
            <td>會員帳號:</td>
          </tr>
          <tr>
            <td>會員姓名:</td>
          </tr>
          <tr>
            <td>會員生日:</td>
          </tr>
          <tr>
            <td>電子信箱:</td>
          </tr>
          <tr>
            <td>手機號碼:</td>
          </tr>
          <tr>
            <td>聯絡地址:</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default MemberInfo
