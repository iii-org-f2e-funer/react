import React from 'react'
import TWzipcode from 'react-twzipcode'
import Datetime from 'react-datetime'
import moment from 'moment'

class Pt_listsearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <>
        <div className="listsearch">
          <div className="searchterm">
            <div className="searchtitle">關鍵字</div>
            <input
              type="text"
              className="form-control"
              autocomplete="off"
              value={this.props.term}
              onChange={e => this.props.changeterm(e)}
            />
          </div>

          <div className="searchlocate">
            <div className="searchtitle">地區</div>
            <TWzipcode
              countyFieldName="pt_city"
              districtFieldName="pt_dist"
              countyValue={this.props.city}
              districtValue={this.props.dist}
              css={[
                'form-control county-sel',
                'form-control district-sel',
                'form-control zipcode',
              ]}
              handleChangeCounty={this.props.chanegecity}
              handleChangeDistrict={this.props.chanegedist}
            />
          </div>
          <div className="searchtime">
            <div className="searchtitle">時間</div>
            <div className="timecol">
              {' '}
              <Datetime
                className="flex"
                dateFormat="YYYY/MM/DD"
                timeFormat="HH:mm"
                inputProps={{ name: 'searchtimestart', autocomplete: 'off' }}
                autocomplete="off"
                onChange={moment => this.props.changestarttime(moment)}
              />
              至
              <Datetime
                className="flex"
                dateFormat="YYYY/MM/DD"
                timeFormat="HH:mm"
                inputProps={{ name: 'searchtimeend', autocomplete: 'off' }}
                autocomplete="off"
                onChange={moment => this.props.changeendtime(moment)}
              />
            </div>
          </div>
          <div className="searchlevel">
            <div className="searchtitle">揪團難度</div>
            <div>
              <select
                className="form-control"
                value={this.props.level}
                onChange={this.props.changelevel}
              >
                <option value="" selected>
                  請選擇
                </option>
                <option className="easy" value="easy">
                  
                  適合新手
                </option>
                <option className="normal" value="normal">適合已有基礎的玩家</option>
                <option className="hard" value="hard">高難度重度策略</option>
              </select>
            </div>
            <div className="btncol">
              <div className="searchbtn" onClick={this.props.search}>
                搜尋
              </div>
              <div className="clearbtn" onClick={this.props.clear}>
                清除
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Pt_listsearch
