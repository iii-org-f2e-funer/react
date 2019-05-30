import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Pt_list from '../pages/pt_page/Pt_list'
import Pt_new from '../pages/pt_page/Pt_new'
import Pt_detail from '../pages/pt_page/Pt_detail'
import Pt_edit from '../pages/pt_page/Pt_edit'
import Member_applyedpt from '../components/event/Member_applyedpt'

function Pt_Router() {
  return (
    <>
      <Switch>
        <Route path="/event/test" component={Member_applyedpt} />
        <Route path="/event/new" component={Pt_new} />
        <Route path="/event/edit/:id" component={Pt_edit} />
        <Route path="/event/info/:id" component={Pt_detail} />
        <Route path="/event/" component={Pt_list} />
      </Switch>
    </>
  )
}
export default Pt_Router
