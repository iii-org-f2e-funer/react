import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Pt_list from '../pages/pt_page/Pt_list'
import Pt_new from '../pages/pt_page/Pt_new'
import Pt_detail from '../pages/pt_page/Pt_detail'
import Pt_edit from '../pages/pt_page/Pt_edit'


function Pt_Router() {
  return (
    <>
      <Switch>
        <Route exact path="/event" component={Pt_list} />
        <Route path="/event/new" component={Pt_new} />
        <Route exact path="/event/:id" component={Pt_detail} />
        <Route path="/event/:id/edit" component={Pt_edit} />
      </Switch>
    </>
  )
}
export default Pt_Router
