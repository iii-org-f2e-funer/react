import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './map.scss'
import { GetStore } from '../../api/Api'

class CitySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 選擇篩選器之後回傳城市中心與比例尺
  handleChange = e => {
    var city_id = e.target.value
    var city_zoom = ''
    var city_center = {}
    // console.log(city_id);
    switch (city_id) {
      // 現在所在位置
      // case "0":
      //     break;

      // 台北市
      case '101':
        city_zoom = '13'
        city_center = { lat: 25.0521, lng: 121.544 }
        break

      // 新北市
      case '102':
        city_zoom = '13'
        city_center = { lat: 25.0154, lng: 121.4733 }
        break

      // 桃園市
      case '104':
        city_zoom = '12'
        city_center = { lat: 24.9894, lng: 121.3134 }
        break

      // 新竹市
      case '105':
        city_zoom = '14'
        city_center = { lat: 24.8008, lng: 120.9907 }
        break

      //台中市
      case '202':
        city_zoom = '12'
        city_center = { lat: 24.1649, lng: 120.6739 }
        break

      // 南投縣
      case '204':
        city_zoom = '11'
        city_center = { lat: 23.7178, lng: 120.7792 }
        break

      // 嘉義市
      case '301':
        city_zoom = '15'
        city_center = { lat: 23.4765, lng: 120.4549 }
        break

      // 台南市
      case '303':
        city_zoom = '15'
        city_center = { lat: 23.001, lng: 120.2255 }
        break

      // 高雄市
      case '304':
        city_zoom = '13'
        city_center = { lat: 22.653, lng: 120.3032 }
        break

      // 宜蘭縣
      case '107':
        city_zoom = '13'
        city_center = { lat: 24.7154, lng: 121.7884 }
        break

      // 全台灣
      default:
        city_zoom = '8'
        city_center = { lat: 23.715, lng: 120.91 }
    }
    // console.log(city_id, city_zoom, city_center)
    this.props.getStoresByCity({
      city_id: city_id,
      zoom: parseInt(city_zoom),
      center: city_center,
    })
  }

  render() {
    return (
      <React.Fragment>
        <select className="custom-select" onChange={this.handleChange}>
          <option value="">依縣市篩選</option>
          {/* <option value="0">現在位置</option> */}
          <option value="101">台北市</option>
          <option value="102">新北市</option>

          {/* <option value="">全台灣</option> */}
        </select>
      </React.Fragment>
    )
  }
}
export default CitySelect
