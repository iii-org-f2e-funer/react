import React from 'react'
import {Form, Col, Row, Button } from 'react-bootstrap'
import '../../styles/pt_style/pt_new.scss'



const Pt_new =()=>{
    return (
        <>
        <div className="container">
        <form name="form1" class="py-4" method="post" onsubmit="return checkform();">
        <input type="hidden" name="check" value="happy6"/>
        <div class="form-group row"/>
            <label for="pt_title" class="col-sm-2 col-form-label">標題</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="pt_title" name="pt_title" placeholder="" value="">
            <div>
            <small id="pt_titleHelp" class="form-text text-muted"></small>
        </div>


    </form>
        </div>
        </>
    )
}

export default Pt_new
