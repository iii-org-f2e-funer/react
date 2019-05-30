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
              <div>
                <div>{game.GAME_MAIN_IMG_URL}</div>
                <div>{game.GAME_MAIN_IMG_ALT}</div>
                <div>{game.GAME_NAME}</div>
                <div>{game.FEATURE_1ST}</div>
                <div>{game.FEATURE_2ND}</div>
                <div>{game.FEATURE_3RD}</div>
                <div>{game.PRICE_MIN}</div>
                <div>{game.ID}</div>
              </div>
              <div className="gameRight">
                <h4 className="gameTitle" />
                {/* <div className="d-flex flex-row">
                                    <div className=""><FaStar className="gameRating"/><span> { parseFloat(game.AVG_RATING).toFixed(1)}</span></div>
                                    <div className="ml-5"><FaRegCommentDots className="gameRatingSamples"/><span> {game.TOTAL_RATING_USERS} 則評價</span></div>
                                </div> */}

                <div className="d-flex flex-row">
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
