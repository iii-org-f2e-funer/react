import React from 'react'
import '../../styles/pt_style/pt_new.scss'
import Datetime from 'react-datetime'
import moment from "moment";


class Pt_new extends React.Component{
    constructor(){
        super()
        this.state ={
            pt_img:'',
            pt_host:'',
            pt_locate:'',
            pt_time: moment().add(7,'days'),
            pt_endtime:moment().add(5,'days'),
            pt_member:2,
            pt_maxm:3,
            pt_level:'',
            pt_title:'',
            pt_info:'',
        }
    }
    handlememberChange = event => {
        this.setState({
            pt_member:event.target.value
        })
    }
    handlemaxmChange = event => {
        this.setState({
            pt_maxm:event.target.value
        })
    }
    handletimeChange = moment => this.setState({ pt_time:moment.toDate() })
    handleendtimeChange = moment => this.setState({ pt_endtime:moment.toDate() })
    handlelevelChange = event=>{
        this.setState({
            pt_level:event.target.value
        })
    }

    render(){
    return (
        <>
        <div className="pt_container">
            <form name="newptform" className="newptform" method="post">
                <input type="hidden" name="check" value="happy6"/>
            <div className="form-row title">   
            <h3>主揪一場新桌遊</h3>
            </div>
            <div className="form-row">
                <label for="pt_imgfile">桌遊封面</label>
            </div>
            <div className="form-row">
                <div className="pt_imgupload flex"><i class="fas fa-camera"/></div>
            </div>
            <div className="form-row">
                <label for="pt_locate">地點</label> 
                <select></select> 
                <select></select>
                <input type="text"/>
            </div>

            <div className="form-row">
                <label for="pt_time">桌遊時間</label> 
                <Datetime className="flex" dateFormat="YYYY/MM/DD" timeFormat="AHH:mm" value={this.state.pt_time} onChange={moment => this.handletimeChange(moment)}/>
            </div>
            
            <div className="form-row">
                <label for="pt_endtime">審核截止時間</label> 
                <Datetime className="flex" dateFormat="YYYY/MM/DD" timeFormat="AHH:mm" value={this.state.pt_endtime} onChange={moment => this.handleendtimeChange(moment)}/>
            </div>
            <div className="form-row">
                <label for="pt_member">成團人數</label> 
                <input type="number" min="1" id="pt_member" name="pt_member" value={this.state.pt_member} onChange={event => this.handlememberChange(event)}/>
            </div>
            <div className="form-row">
                <label for="pt_maxm">上限人數</label> 
                <input type="number" min="1" id="pt_maxm" name="pt_maxm" value={this.state.pt_maxm} onChange={event => this.handlemaxmChange(event)}/>
            </div>
            <div className="form-row">
                <label for="pt_level">遊戲難度</label> 
                <input className="pt_level" type="radio" name="pt_level" id="" value="1" onChange={event => this.handlelevelChange(event)}/>適合新手
                <input className="pt_level" type="radio" name="pt_level" id="" value="2" onChange={event => this.handlelevelChange(event)}/>適合已有基礎的玩家
                <input className="pt_level" type="radio" name="pt_level" id="" value="3" onChange={event => this.handlelevelChange(event)}/>高難度重度策略
            </div>
            <div className="form-row">
                <label for="pt_title">開團標題</label> 
                <input type="text" id="pt_title" name="pt_title" placeholder="請輸入你的桌遊標題" value=""/>
            </div>
            <div className="form-row">
                <label for="pt_info">詳細描述</label> 
                <textarea id="pt_info" name="pt_info" rows="20" placeholder="增加一些描述讓你的團吸引其他人加入吧"/>
            </div>
            <div className="form-row">
            <button className="pt_submitbtn">確認開團</button>
            </div>
            </form>
        </div>
        </>
    )
}
}

export default Pt_new
