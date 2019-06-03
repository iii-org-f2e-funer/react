/*global google getGeoLocation*/

import React, { Component } from 'react'
// import { Helmet } from 'react-helmet'
import fetch from 'isomorphic-fetch'
import MapBody from './MapBody'
import QueryBar from './QueryBar'
import CitySelect from './CitySelect'
import StoreInfo from './StoreInfo'
import GameInfo from './GameInfo'
import './map.scss'
import { GetStore } from '../../api/Api'

class BoradGameMap extends React.Component {
  state = {
    currentLatLng: {},
    stores: [],
    name_kw: '',
    city_id: '',
    zoom: 7,
    center: { lat: 23.715, lng: 120.91 },
    panTo: {},

    // getStoreByMarker
    storeId: '',
    storeLogo: '',
    storeName: '',
    storeAdd: '',
    storeTel: '',
    storeOpHr: '',
    gamesInfo: [],
    storeSid: '',
    storeFirm_id: '',
    storeStore: '',
    storeCounty: '',
    storeDist: '',
    storeAddress: '',
    storePhone: '',
    businessHour: '',
    publicHoliday: '',
    imageArray: [],
    ////
    fetchNearbyStores: false,
  }

  // 取得來自MapBody點擊場館獲得的場館資料與遊戲資料
  getStoreByMarker(data) {
    console.log(data)
    this.setState({
      storeId: data.storeId,
      storeLogoUrl: data.storeLogoUrl,
      storeName: data.storeName,
      storeAdd: data.storeAdd,
      storeTel: data.storeTel,
      storeHourWeekday: data.storeHourWeekday,
      storeHourWeekend: data.storeHourWeekend,
      gamesInfo: data.gamesInfo,
      storeSid: data.storeSid,
      storeFirm_id: data.storeFirm_id,
      storeStore: data.storeStore,
      storeCounty: data.storeCounty,
      storeDist: data.storeDist,
      storeAddress: data.storeAddress,
      storePhone: data.storePhone,
      businessHour: data.businessHour,
      publicHoliday: data.publicHoliday,
      imageArray: data.imageArray,
    })
  }

  // 依據城市選擇器回傳的地圖中心與比例尺切換，並讀出該城市場館
  getStoresByCity(data) {
    this.setState({
      city_id: data.city_id,
      zoom: data.zoom,
      center: data.center,
    })
    //^^^^^^CitySelect==CALLBACK

    // fetch(GetStore + '&city=' + data.city_id)
    fetch('http://13.112.90.13:3002/gameMap/city/' + data.city_id)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => {
        this.setState({ stores: res })
      })
      // .catch(err => console.log(err))
      .catch(err => {
        throw new Error(err)
      })
  }

  getSearch(data) {
    // fetch(GetStore + '&lat=' + lat + '&lng=' + lng)
    console.log(data)

    fetch('http://13.112.90.13:3002/gameMap/All/' + data)
      .then(res => res.json())
      // .then(res => console.log(res))

      .then(res => {
        console.log(res)
        if (res[0] === 'nodata') {
          alert('搜尋沒有結果')
          return ''
        }
        this.setState({
          stores: res,
          fetchNearbyStores: false,
          center: { lat: res[0].lat, lng: res[0].lng },
          zoom: 13,
        })
        if (res[0] === 'nodata') {
          this.setState({ nodata: 1 })
        } else {
          this.setState({ nodata: 0 })
        }
      })
      // .catch(err => console.log(err))
      .catch(err => {
        throw new Error(err)
      })
  }

  clearSearch(data) {
    this.setState({ storeStore: '' })

    this.getSearch('')
  }

  // TOBE FIXED: 取得文字搜尋回傳的地圖中心與比例尺與場館資料與遊戲資料
  // getStoreByName(data){
  //   this.setState({
  //       zoom: data.zoom,
  //       center: data.center,
  //       storeId: data.storeId,
  //       storeLogo: data.storeLogo,
  //       storeLogoUrl: data.storeLogoUrl,
  //       storeName: data.storeName,
  //       storeAdd: data.storeAdd,
  //       storeTel: data.storeTel,
  //       storeOpHr: data.storeOpHr
  //   });
  //   fetch('http://13.112.90.13:3000/map/store/'+this.state.storeId)
  //   .then(res => res.json())
  //   .then(({ data }) => {
  //     this.setState({
  //       gamesInfo: data
  //     })
  //   })
  //   .catch(err=> console.log(err));
  // }

  // 瀏覽器取得經緯度
  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 14,
            fetchNearbyStores: true,
          })
          console.log(
            'Current position at: ' +
              position.coords.latitude +
              ', ' +
              position.coords.longitude
          )
          console.log(this.state.fetchNearbyStores)
        },
        err => {
          this.setState({
            center: {
              lat: 25.0757482,
              lng: 121.5059786,
            },
            zoom: 11.5,
            fetchNearbyStores: true,
          })
        }
      )
    }
  }

  //^^^^^^componentWillMount

  // 依所在位置取得鄰近場館
  getStoresByPosition(lat, lng) {
    // fetch(GetStore + '&lat=' + lat + '&lng=' + lng)
    fetch('http://13.112.90.13:3002/gameMap/All')
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => {
        this.setState({
          stores: res,
          fetchNearbyStores: false,
        })
      })
      // .catch(err => console.log(err))
      .catch(err => {
        throw new Error(err)
      })
  }
  //^^^^^^ componentDidUpdate^^^^^^^^res=>state.srores

  componentWillMount() {
    this.setState({ markers: [] })
    this.getGeoLocation() // 啟動抓取現在經緯度
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.setState({
      storeLogoUrl: '/img/opened-door-aperture.png',
      storeName: 'blank_storeName',
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.city_id !== this.state.city_id) {
      // console.log(this.state.city_id);
    }
    if (this.state.fetchNearbyStores === true) {
      const {
        center: { lat, lng },
      } = this.state
      this.getStoresByPosition(lat, lng)
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <Helmet>
          <title>台灣密室地圖 - 逃脫吧！Escape Bar</title>
          <meta
            property="og:url"
            content={`https://escape.bar${this.props.location.pathname}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="台灣密室逃脫 - 逃脫吧！Escape Bar"
          />
          <meta
            property="og:description"
            content="全台所有密室逃脫場館一網打盡，來看看你附近有哪些好玩的密室逃脫吧！"
          /> */}
        {/* <meta property="og:image" content={} /> */}
        {/* </Helmet> */}
        <div className="mapContainer" style={{ minHeight: '750px' }}>
          <div className="mapBody">
            <MapBody
              getStoreByMarker={data => this.getStoreByMarker(data)}
              zoom={this.state.zoom}
              center={this.state.center}
              stores={this.state.stores}
            />
          </div>
          <div className="queryBar">
            <QueryBar
              getStoreByName={data => this.getStoreByName(data)}
              getSearch={data => this.getSearch(data)}
            />
          </div>
          <div className="citySelect">
            <CitySelect
              // getCenterByCity = {data => this.getCenterByCity(data)}
              getStoresByCity={data => this.getStoresByCity(data)}
            />
          </div>
          <div className="mapSideInfo">
            <StoreInfo
              storeLogoUrl={this.state.storeLogoUrl}
              storeName={this.state.storeName}
              storeAdd={this.state.storeAdd}
              storeTel={this.state.storeTel}
              storeHourWeekday={this.state.storeHourWeekday}
              storeSid={this.state.storeSid}
              storeFirm_id={this.state.storeFirm_id}
              storeStore={this.state.storeStore}
              storeCounty={this.state.storeCounty}
              storeDist={this.state.storeDist}
              storeAddress={this.state.storeAddress}
              storePhone={this.state.storePhone}
              businessHour={this.state.businessHour}
              publicHoliday={this.state.publicHoliday}
              imageArray={this.state.imageArray}
              dataStore={this.state.stores}
              getSearch={data => this.getSearch(data)}
              clearSearch={() => this.clearSearch()}
            />
            {/* <GameInfo gamesInfo={this.state.gamesInfo} /> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BoradGameMap
