import React from 'react'
import '../styles/product/product.scss'
import Footer from '../components/Footer'
const product = () => {
  return (
    <>
      <div className="banner">
        {' '}
        <h2 className="banner-tittle">桌遊，知性與深度的休閒生活方式</h2>
        <img
          id="purplemonster"
          src={process.env.PUBLIC_URL + '/images/product/purplemonster.png'}
        />
      </div>
      <div className="outside">
        <div className="search" />
        <div className="cards" />
      </div>
      <Footer />
    </>
  )
}

export default product