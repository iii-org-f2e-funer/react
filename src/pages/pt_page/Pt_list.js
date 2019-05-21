import React from 'react'
import { Card } from 'react-bootstrap'
import '../../styles/pt_style/pt_list.scss'
import { Link } from 'react-router-dom'
import Pt_banner from '../../components/event/Pt_banner.js'
import Pt_listitem from '../../components/event/Pt_listitem.js'
import Pt_Router from '../../routers/Pt_router'

const Pt_list = () => {
  return (
    <>
      <Pt_banner />
      <div className="ptlist_container">
      <Pt_listitem />
      </div>
    </>
  )
}

export default Pt_list
