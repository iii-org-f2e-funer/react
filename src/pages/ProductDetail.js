import React from 'react'
import '../styles/product/ProductDetail.scss'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProductDetail = () => {
  return (
    <>
      <div className="ProductDetail">
        <div className="container">
          <div className="mainBoard">
            <div className="flex">
              <div className="imgCard">
                <img
                  width="100%"
                  height="auto"
                  variant="top"
                  src={process.env.PUBLIC_URL + '/images/product/game2.jpg'}
                />
              </div>
              <div className="detailCard">
                <h2>矮人礦坑</h2>
                <p>店家 Game Square 遊戲平方 中山店</p>

                <p>分類 紙牌遊戲 ,輕策略遊戲</p>

                <p>
                  售價 <div className="seld">192</div>元
                </p>
                <div className="addandsubtract">
                  <div className="add button button">
                    <i class="fas fa-plus" />
                  </div>
                  <div className="product-many">1</div>
                  <div className="subtract button ">-</div>
                </div>
                <Button className="actionButton1 " size="lg" block>
                  加入購物車
                </Button>
              </div>
            </div>
            <div className="product-Description-title">產品說明</div>
            <div className="product-Description-contact">
              遊戲人數：3-10人 <br />
              適合年齡：8歲以上 <br />
              遊戲時間：約30分
              <br />
              遊戲設計：Frederic Moyersoen <br />
              語言版本：中文 遊戲目標:
              <br />
              三個目的地,玩家抽取角色牌決定好人或壞人(就是破壞者)後開始心機大對決!
              好人目標是出隧道牌挖到真正的寶藏(另兩個是石頭)即獲 勝,壞人則須干擾
              及搞破壞,所有人手牌皆出完後若仍未挖到寶藏, 則壞人獲勝 <br />
              遊戲特色:
              <br />
              ◎玩家在寶藏挖到後或結束時才可以表明身份
              <br />
              ◎由出牌過程中猜測誰是好人誰是壞人是最大樂趣,相當心機
              <br />
              ◎有封鎖牌,可以對別的玩家使用,以禁止其穢魊G道牌,亦有解救牌
              <br />
              ◎有炸彈牌,可以炸毀死路或活路,也有地圖牌,可以先檢查寶藏位置
              <br />
              ◎角色牌共十一張,4壞7好,讓最多10個人抽,因此無法確定壞人確實人數
              <br />
              ◎好人挖到寶藏後,可以分享金礦牌,其金額由運氣決定
              <br />
              ◎壞人獲勝後,可以獲得固定高金額的報酬
              <br />
              ◎遊戲進行以金礦牌張數決定,10人遊戲大約進行3回合,即結束
              <br />
              ◎遊戲結束時,計算手中金礦金額以決定誰是大贏家
              <br />
              這是個可10人遊戲的Party
              Game，規則簡單好上手，但過程變化多端，也可以趁機耍耍心機喔！
              <br />
              內含中文說明書 <br />
              適用卡盒：大
              各種語言版本內容及材質完全相同，若中文版缺貨將以其他語言版本代替（附中文說明書）
              2006年美國遊戲雜誌選拔最佳家庭遊戲提名 尺寸：12.2 x 9.5 x 2 cm
              內含規則說明書（繁體中文、簡體中文、英文、馬來文、印度文）
              所有語言版本遊戲內容及材質完全相同，僅有原文說明書的語言不同。
              <br />
              適用牌套：5.7*9cm
            </div>
          </div>
          <div className="maylike">
            <div className="maylike-title">
              {' '}
              <div className="mayliketitle-img" />
              <h4>你可能有興趣</h4>
            </div>
            <div className="maylike-images">
              <Link to="/ProductDetail">
                <div className="gamecard">
                  <Card style={{ width: '200px', height: '280px' }}>
                    <Card.Img
                      width="184px"
                      height="184px"
                      variant="top"
                      src={process.env.PUBLIC_URL + '/images/product/game1.jpg'}
                    />
                    <Card.Body>
                      <Card.Title>矮人礦坑</Card.Title>
                      <Card.Text>NT 790</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
              <Link to="/ProductDetail">
                <div className="gamecard">
                  <Card style={{ width: '200px', height: '280px' }}>
                    <Card.Img
                      width="184px"
                      height="184px"
                      variant="top"
                      src={process.env.PUBLIC_URL + '/images/product/game1.jpg'}
                    />
                    <Card.Body>
                      <Card.Title>矮人礦坑</Card.Title>
                      <Card.Text>NT 790</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
              <Link to="/ProductDetail">
                <div className="gamecard">
                  <Card style={{ width: '200px', height: '280px' }}>
                    <Card.Img
                      width="184px"
                      height="184px"
                      variant="top"
                      src={process.env.PUBLIC_URL + '/images/product/game1.jpg'}
                    />
                    <Card.Body>
                      <Card.Title>矮人礦坑</Card.Title>
                      <Card.Text>NT 790</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
              <Link to="/ProductDetail">
                <div className="gamecard">
                  <Card style={{ width: '200px', height: '280px' }}>
                    <Card.Img
                      variant="top"
                      width="184px"
                      height="184px"
                      src={process.env.PUBLIC_URL + '/images/product/game1.jpg'}
                    />
                    <Card.Body>
                      <Card.Title>矮人礦坑</Card.Title>
                      <Card.Text>NT 790</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
              <Link to="/ProductDetail">
                <div className="gamecard">
                  <Card style={{ width: '200px', height: '280px' }}>
                    <Card.Img
                      variant="top"
                      width="184px"
                      height="184px"
                      src={process.env.PUBLIC_URL + '/images/product/game1.jpg'}
                    />
                    <Card.Body>
                      <Card.Title>矮人礦坑</Card.Title>
                      <Card.Text>NT 790</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
            </div>
          </div>
        </div>{' '}
        <div className="scrolltop" />
      </div>
    </>
  )
}

export default ProductDetail
