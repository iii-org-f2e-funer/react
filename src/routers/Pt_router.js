import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Pt_list from '../pages/pt_page/Pt_list'
import Pt_new from '../pages/pt_page/Pt_new'

function Pt_Router() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/event" component={Pt_list} />
          <Route path="/event/new" component={Pt_new} />
        </Switch>
      </>
    </Router>
  )
}
export default Pt_Router
