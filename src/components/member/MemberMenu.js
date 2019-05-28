import React from 'react'
import '../../styles/member/member.scss'
import { Form, Card, Col, Button, Table } from 'react-bootstrap'

const MemberMenu = () => {
  return (
    <>
      {/* 個人資料 */}
      <div className="personal">
        <Card className="card">
          <Col className="d-flex">
            {/* 照片 */}
            <Card.Img variant="top" src="../images/member/sticker.png" />
            <Card.Body>
              <Card.Title>姓名</Card.Title>
              <Card.Text>mail</Card.Text>
              <Button className="btn-sm text-nowrap" variant="primary">
                編輯個人資料
              </Button>
            </Card.Body>
          </Col>
        </Card>
        {/* 下選單 */}
        <Table>
          <tbody className="col-12">
            <ul className="list-unstyled ">
              <li className="">
                <a href="">帳號設定</a>
              </li>
              <li className="">
                <a href="">我的揪團</a>
              </li>
              <li>
                <a href="">訂單查詢</a>
              </li>
              <li>
                <a href="">場地預定</a>
              </li>
              <li>
                <a href="">系統信件</a>
              </li>
            </ul>
          </tbody>
        </Table>
      </div>
      {/* 資訊欄 */}
    </>
  )
}

export default MemberMenu
