// 揪團部分
import React from 'react'
import { withRouter } from 'react-router'
import { Card, ListGroup, Button } from 'react-bootstrap'
import Member_applyedpt from '../event/Member_applyedpt'

class UserEvent extends React.Component {
  render() {
    return (
      <>
        <h5>參加中的揪團</h5>
        <Member_applyedpt />
        <Member_applyedpt />
        <Member_applyedpt />
        <h5>歷史中的揪團</h5>
        <Member_applyedpt />
        <Member_applyedpt />
        <Member_applyedpt />
      </>
    )
  }
}

export default withRouter(UserEvent)
