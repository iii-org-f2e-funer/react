import React from 'react'
import '../styles/firm/firm.sass'
import Sidebar from '../components/firm/Sidebar'

const Firm = ({ data }) => {
  return (
    <>
      <div className="container">
        <Sidebar />
      </div>
    </>
  )
}

export default Firm
