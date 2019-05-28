import React from 'react'
import '../../styles/member/member.scss'
import { Table, Form, Row } from 'react-bootstrap'

const MemberForm = () => {
  return (
    <div className="form">
      <thead>
        <h4 className="col-3">個人資料</h4>
      </thead>

      <Form>
        {/* Name */}
        <Form.Group controlId="formGroupName">
          <Form.Label>會員姓名</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        {/* Address */}
        <Form.Label>聯絡地址</Form.Label>
        <Form.Group
          className="add d-flex"
          controlId="exampleForm.ControlSelect1"
        >
          <Form.Control as="select">
            <option>台北市</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>

          <Form.Control as="select">
            <option>大安區</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Control type="text" placeholder="" />
          <br />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formGroupPassword">
          <Form.Label>密碼</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  )
}

export default MemberForm
