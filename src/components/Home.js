import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'
import EventSlider from './home/EventSlider'
import ProductSlider from './home/ProductSlider'
import InstagramSlider from './home/InstagramSlider'
import Preload_page from '../pages/Preload_page.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeEvents: [],
      homeProducts: [],
      preload: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.closeAnimate()
    }, 5400)
  }
  closeAnimate = () => {
    this.setState({ preload: false })
  }
  render() {
    return (
      <>
        <div className="home">
          {/* LANDING PAGE */}
          <div className="home_landing">
            <div className="landing_t">
              <div className="container">
                <h1>
                  Have Fun <br /> and <br /> Meet New <br /> Friends !
                </h1>
                <div className="btn_div">
                  <Link to="/event">
                    <button className="button button--yellow">START</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="landing_b">
              <div className="landing_feature">
                <img
                  src={process.env.PUBLIC_URL + '/images/home/event.png'}
                  alt=""
                />
                <p>
                  桌遊開團
                  <br />
                  區分新手老手團
                </p>
              </div>
              <div className="landing_feature">
                <img
                  src={process.env.PUBLIC_URL + '/images/home/game.png'}
                  alt=""
                />
                <p>
                  最新桌遊商品
                  <br />
                  多店家比價
                </p>
              </div>
              <div className="landing_feature">
                <img
                  src={process.env.PUBLIC_URL + '/images/home/map.png'}
                  alt=""
                />
                <p>
                  桌遊地圖找店家
                  <br />
                  最方便的場地預約
                </p>
              </div>
            </div>
          </div>
          {/* 最新揪團 */}
          <div className="home_event">
            <h2>最新揪團</h2>
            <EventSlider />
            <div className="event_b">
              <Link to="/event">
                <button className="button button--yellow">more</button>
              </Link>
            </div>
          </div>
          {/* 桌遊地圖 */}
          <div className="home_map">
            <div className="container">
              <div className="l" />
              <div className="m">
                <h2>桌遊地圖</h2>
                <p>
                  來看看離你最近的店家吧！
                  <br />
                  透過地圖精準地找出你與朋友們的最佳距離，再也不怕迷路！
                  <br />
                  點擊店家資訊開始預約，趕快來試試桌遊地圖！
                  <br />
                  Let's GO FUNer！
                </p>
                <div className="btn_div">
                  <Link to="/gamemap">
                    <button className="button button--yellow">
                      Go FUNer !
                    </button>
                  </Link>
                </div>
              </div>
              <div className="r" />
            </div>
          </div>
          {/* 熱銷商品 */}
          <div className="home_product">
            <h2>熱銷商品</h2>
            <ProductSlider />
            <div className="product_b">
              <Link to="/product">
                <button className="button button--yellow">more</button>
              </Link>
            </div>
          </div>
          {/* 桌遊動態 */}
          <div className="home_instagram">
            <div className="container">
              <div className="l" />
              <div className="r">
                <h2>桌遊動態</h2>
                <InstagramSlider />
              </div>
            </div>
          </div>
        </div>
        {this.state.preload ? <Preload_page /> : ''}
      </>
    )
  }
}
export default Home
