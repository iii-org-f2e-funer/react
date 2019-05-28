import React from 'react'
import '../styles/member/member.scss'
import { Button, Card, Table, Row, Col } from 'react-bootstrap'
// import MemberInfo from '../components/member_info/MemberInfo'
// import MemberMenu from '../components/member_info/MemberMenu'
// import MemberForm from '../components/member_info/MemberForm'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

const Member = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Row>
            <Col>
              <p>jeisf</p>
              {/* 個人資料 */}
              {/* <MemberMenu /> */}
              {/* 資訊欄 */}
              {/* <MemberInfo /> */}
              {/* 輸入頁 */}
              {/* <MemberForm /> */}
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Member
