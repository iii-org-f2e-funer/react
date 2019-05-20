import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const LoginInput = () => {
    return (
        <>
            <Modal.Body>
                <Form.Group controlId="formBasicEmail" className="login-control">
                    <i class="fa fa-user"></i>
                    <Form.Control type="text" placeholder="Enter email" className="account form-control" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="login-control">
                    <i class="fa fa-lock"></i>
                    <Form.Control type="password" placeholder="Password" className="password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="button button--lg">登入</Button>


            </Modal.Body>
        </>
    )
}

export default LoginInput