import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './map.scss'
import { Input, Button, Label, Tooltip } from 'reactstrap'
import {
  FaStar,
  FaRegCommentDots,
  FaHashtag,
  FaDollarSign,
} from 'react-icons/fa'

class GameInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <div className="gameInfo">
          {this.props.gamesInfo.map(game => (
            <div className="gameRow" key={game.ID}>
              <div className="gameLeft">
                <img
                  className="gameImg"
                  src={game.GAME_MAIN_IMG_URL}
                  alt={game.GAME_MAIN_IMG_ALT}
                />
              </div>
              <div className="gameRight">
                <h4 className="gameTitle">{game.GAME_NAME}</h4>
                {/* <div className="d-flex flex-row">
                                    <div className=""><FaStar className="gameRating"/><span> { parseFloat(game.AVG_RATING).toFixed(1)}</span></div>
                                    <div className="ml-5"><FaRegCommentDots className="gameRatingSamples"/><span> {game.TOTAL_RATING_USERS} 則評價</span></div>
                                </div> */}
                <div className="gameFeature">
                  <FaHashtag className="gameFeatureTag" />
                  <span>{game.FEATURE_1ST}</span>
                  <FaHashtag className="gameFeatureTag" />
                  <span>{game.FEATURE_2ND}</span>
                  <FaHashtag className="gameFeatureTag" />
                  <span>{game.FEATURE_3RD}</span>
                </div>
                <div className="d-flex flex-row">
                  <div className="flex-grow-1">
                    <FaDollarSign />
                    <span>{game.PRICE_MIN} 元起 </span>
                  </div>
                  <div className="">
                    <NavLink to={{ pathname: `/games/game/${game.ID}` }}>
                      <Button className="" color="warning">
                        查看更多
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default GameInfo
