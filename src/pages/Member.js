import React from 'react'
import '../styles/member/member.scss'
import { Button, Card, Table, Row, Col } from 'react-bootstrap'
// import MemberInfo from '../components/member/MemberInfo'
import MemberMenu from '../components/member/MemberMenu'
// import MemberForm from '../components/member/MemberForm'

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="main">
          <div className="container">
            <Row>
              <Col>
                {/* 個人資料 */}
                <MemberMenu avatarRefresh={this.props.avatarRefresh} />
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
}

export default Member
