import React from 'react'
import '../styles/personalFolder/demo.scss'
import { Button } from 'react-bootstrap'

const Demopage = () => {
  return (
    <>
      <p className="title">happy6</p>
      <img
        className=""
        src={process.env.PUBLIC_URL + '/images/personalFolder/logo.png'}
      />
      <Button variant="primary">Primary</Button>

      <h1 className="title">background</h1>
      <div className="imgbox" />
    </>
  )
}

export default Demopage
