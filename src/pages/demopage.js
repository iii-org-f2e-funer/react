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
      <img src="http://192.168.27.25/happy6/firm_manage/uploads/%E5%9C%B0%E4%B8%8B%E5%9F%8E.png" />
      <Button variant="primary">Primary</Button>

      <h1 className="title">background</h1>
      <div className="imgbox" />
    </>
  )
}

export default Demopage
