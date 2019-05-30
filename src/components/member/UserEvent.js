// 揪團部分
import React from 'react'
import { withRouter } from 'react-router'
import { Card, ListGroup, Button } from 'react-bootstrap'

class UserEvent extends React.Component {
  render() {
    return (
      <>
        <h5>參加中的揪團</h5>
        <Card style={{ width: 'calc(100%)' }} className="mb-3">
          <ListGroup>
            <ListGroup.Item className="flex">
              <div className="col-2">photo</div>
              <div className="col-7">info</div>
              <div className="flex">
                <Button variant="">Primary</Button>
                <Button variant="">Primary</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <h5>歷史中的揪團</h5>
        <Card style={{ width: 'calc(100%)' }} className="mb-3">
          <ListGroup>
            <ListGroup.Item className="flex">
              <div className="col-2">photo</div>
              <div className="col-7">info</div>
              <div className="flex">
                <Button variant="">Primary</Button>
                <Button variant="">Primary</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </>
    )
  }
}

export default withRouter(UserEvent)
