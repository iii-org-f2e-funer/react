import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../styles/instagram/instagram.scss'
import User from './User'
import Stories from './Stories'
import Bookmark from './Bookmark'
import Event from './Event'
import Battle from './Battle'

// import actions from '../redux/action/instagram'
import { connect } from 'react-redux'

class Instagram extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.dispatch({ type: 'isFixed' })
  }
  componentWillUnmount() {
    this.props.dispatch({ type: 'unFixed' })
  }

  render() {
    return (
      <>
        <div
          className={
            this.props.isFixed
              ? 'instagram container navfixed'
              : 'instagram container'
          }
        >
          <User />
          <Switch>
            <Route exact path="/:instagram" component={Stories} />
            <Route exact path="/:instagram/bookmark" component={Bookmark} />
            <Route exact path="/:instagram/battle" component={Battle} />
          </Switch>
          <Event />
        </div>
      </>
    )
  }
}

// export default Instagram

function mapStateToProp(store) {
  return {
    isFixed: store.isFixed,
  }
}

export default connect(mapStateToProp)(Instagram)
