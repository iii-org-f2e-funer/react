import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../styles/product/shop.scss'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
const Shopping1 = () => {
  return (
    <>
      <div className="Shopping1">
        <div className="container">
          <div className="container1">
            <div className="stepall">
              <div className="step1 step">1</div>
              <div className="line1 line" />
              <div className="step2 step">2</div>
              <div className="line2 line" />
              <div className="step3 step">3</div>
            </div>
            <div className="step-word">
              <div className="step1-word word">訂購資訊</div>
              <div className="step1-word word">付款資訊</div>
              <div className="step1-word word">購買成功</div>
            </div>
            <div className="step1-form">
              <div className="form-controll">
                <div className="title-titles">
                  <div className="title-people">訂購人資料</div>{' '}
                  <div>
                    <Form.Group controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="同會員資料" />
                    </Form.Group>
                  </div>
                </div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control type="text" placeholder="輸入姓名" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>地址</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>手機</Form.Label>
                    <Form.Control type="number" placeholder="輸入手機" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>電子信箱</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Form>
              </div>
              <div className="form-controll">
                <div className="title-titles">
                  <div className="title-people">收件人資料</div>{' '}
                  <div>
                    <Form.Group controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="同訂購人資料" />
                    </Form.Group>
                  </div>
                </div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control type="text" placeholder="輸入姓名" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>地址</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>手機</Form.Label>
                    <Form.Control type="number" placeholder="輸入手機" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>電子信箱</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <div className="buttons">
                    <div className="buttonall">
                      <Button className="button2 button">回購物車</Button>
                    </div>
                    <div className="buttonall">
                      <Button className="button1 button">下一步</Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shopping1
