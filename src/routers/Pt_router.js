import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Pt_list from '../pages/pt_page/Pt_list'
import Pt_new from '../pages/pt_page/Pt_new'
import Pt_detail from '../pages/pt_page/Pt_detail'

function Pt_Router() {
  return (
    <>
      <Switch>
        <Route exact path="/event" component={Pt_list} />
        <Route path="/event/new" component={Pt_new} />
        <Route path="/event/id" component={Pt_detail} />
      </Switch>
    </>
  )
}
export default Pt_Router
