import React from 'react'
import '../styles/gameMap/gameMap.scss'
import { Button, Tabs, Tab } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Slider from '../components/gameMap/ImgSlider'

class GameMapDetail extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="bodyroot">
          <div className="container">
            <div className="mainBoard">
              <div className="flex">
                <div className="imgCard">
                  <h1 />
                </div>
                <div className="detailCard">
                  <h2 className="shoptitle">Game Square 遊戲平方 中山店</h2>
                  <p>
                    台北市,中山區中山北路1段135巷9號2樓
                    <br />
                    02 2581 1191
                    <br />
                    週一～週四 14:00 -22:00 <br />
                    (22：00 後需當天21:30前預約)
                    <br />
                    週五～週日 13:00 - 02:00
                  </p>
                  <p>
                    週五～週日及國定假日 <br />
                    1hr 會員 $90 / 非會員 $100
                    <br />
                    4hrs 會員$300 / 非會員 $400
                  </p>
                  <Button className="actionButton " size="lg" block>
                    預約場地
                  </Button>
                </div>
              </div>

              <div className="subBoard">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="關於我們">
                    Game Square
                    遊戲平方是一家複合式的休閒桌遊空間，店主是台灣相當知名的卡牌桌遊魔法風雲會的世界級現役競賽選手！
                    在各國旅行比賽的過程中參訪過了世界各地的桌遊空間店，發現在歐美等地，桌遊與現代休閒是相當自然的流行著。
                    於是我們就有了一個想法，想去創造一個可以輕鬆喝著飲料啤酒、一邊聊天一邊看著運動競賽、玩桌遊，且營業時間較符合都會需求的複合空間！
                    歡迎大家在想放鬆或享受益智休閒的時候，來到我們店裡享受自己想要遊玩的桌遊或是一起為喜歡的隊伍加油！
                    店內提供免費無線網路以及桌遊教學，另外備有MOD及100吋大螢幕投影及音響設備，歡迎聯誼活動、運動賽事觀賞、各式座談會等活動包場！
                  </Tab>
                  <Tab eventKey="profile" title="場地規範">
                    於是我們就有了一個想法，想去創造一個可以輕鬆喝著飲料啤酒、一邊聊天一邊看著運動競賽、玩桌遊，且營業時間較符合都會需求的複合空間！
                    歡迎大家在想放鬆或享受益智休閒的時候，來到我們店裡享受自己想要遊玩的桌遊或是一起為喜歡的隊伍加油！
                    店內提供免費無線網路以及桌遊教學，另外備有MOD及100吋大螢幕投影及音響設備，歡迎聯誼活動、運動賽事觀賞、各式座談會等活動包場！
                  </Tab>
                  <Tab eventKey="contact" title="評價">
                    遊戲平方是一家複合式的休閒桌遊空間，店主是台灣相當知名的卡牌桌遊魔法風雲會的世界級現役競賽選手！
                    在各國旅行比賽的過程中參訪過了世界各地的桌遊空間店，發現在歐美等地，桌遊與現代休閒是相當自然的流行著。
                  </Tab>
                </Tabs>
              </div>
            </div>
            {/* main board */}
            <div>
              <h3 className="lgfont">附近店家</h3>
              <hr />
            </div>
            <div className="">
              <Slider />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default GameMapDetail
