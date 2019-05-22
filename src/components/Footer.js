import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="words">
          <div className="contact">
            <div className="w1">聯絡我們</div>
            <div className="w2">客服電話 : 02-1234567</div>
            <div className="w2">客服信箱 : funer@funer.com</div>
            <div className="w2">地址 : 台北市大安區復興南路一段390號 2,3號</div>
          </div>
          <div className="about">
            <div className="w1">關於我們</div>
            <div className="w2">關於FUNer</div>
            <div className="w2">揪團去</div>
            <div className="w2">預約店家</div>
            <div className="w2">購買桌遊</div>
          </div>
          <div className="link">
            <div className="link1">
              <div className="w1">社群連結</div>
            </div>
            <div className="link2">
              <div className="logoconnect">
                <img
                  src={process.env.PUBLIC_URL + '/images/footer/facebook.png'}
                />
              </div>
              <div className="logoconnect">
                <img src={process.env.PUBLIC_URL + '/images/footer/line.png'} />
              </div>
              <div className="logoconnect">
                <img
                  src={process.env.PUBLIC_URL + '/images/footer/instagram.png'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copy-line" />
          <div className="copyright-word">
            Copyright © 2019 All rights reserved
          </div>
        </div>

        <div className="logo" />
        <div className="watermark" />
      </div>
    </>
  )
}

export default Footer
