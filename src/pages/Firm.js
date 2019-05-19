import React from 'react'
import '../styles/firm/firm.sass'
import Sidebar from '../components/firm/Sidebar'
import Firm_manage from '../components/firm/Firm_manage'


const Firm = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Firm_manage />
      </div>
    </>
  )
}

export default Firm
