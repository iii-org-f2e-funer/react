import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'

// import MapStyles from './MapStylesNight.json'
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer'

const DN = 'https://escape.bar/api/'
const wpApiRoute = `${DN}?rest_route=/sections/v1/`
const GetGame = `${wpApiRoute}games`
const GetFirm = `${wpApiRoute}firms`
const GetStore = `${wpApiRoute}stores`
const GetArticle = `${wpApiRoute}articles/`

const GoogleMapsWrapper = withScriptjs(
  withGoogleMap(props => {
    const { onMapMounted, ...otherProps } = props
    return (
      <GoogleMap
        {...otherProps}
        ref={c => {
          onMapMounted && onMapMounted(c)
        }}
      >
        {props.children}
      </GoogleMap>
    )
  })
)

class MapBody extends React.Component {
  constructor(props) {
    super(props)
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }
  state = {
    stores: [],

    logo40Route: '../img/company/40/',
    // logo40Route: "../img/storelogo/"
  }

  componentDidMount() {
    // 預設全部讀出使用
    // fetch(GetStore)
    //   .then(res => res.json())
    //   // .then(res => {console.log(res)})
    //   .then(res => {
    //     this.setState({ stores: res });
    //   })
    //   .catch(err=> console.log(err));
  }

  _mapRef = null

  _handleMapMounted = c => {
    if (!c || this._mapRef) return
    this._mapRef = c
    // console.log('Ref set later @ ' + Date.now());
  }

  _handleBoundsChanged = () => {
    if (!this._mapRef) return
    const center = this._mapRef.getCenter()
    const bounds = this._mapRef.getBounds()
  }

  onMarkerClick = evt => {
    //<- event object, not a marker object!
    let storeId = evt.ID
    let storeName = evt.STORE_NAME
    let storeLogoUrl = evt.STORE_LOGO_URL
    let storeAdd = evt.STORE_ADD
    let storeTel1 = evt.STORE_TEL_1
    let storeHourWeekday = evt.STORE_HOUR_WEEKDAY

    // *Get games in store
    fetch(GetStore + '/store_id=' + storeId)
      .then(res => res.json())
      // .then(res => {console.log(res)})
      .then(res => {
        this.props.getStoreByMarker({
          storeId: storeId,
          storeLogoUrl: storeLogoUrl,
          storeName: storeName,
          storeAdd: storeAdd,
          storeTel: storeTel1,
          storeHourWeekday: storeHourWeekday,
          gamesInfo: res,
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stores != this.props.stores) {
      this.setState({
        stores: this.props.stores,
      })
    }
  }

  render() {
    return (
      <GoogleMapsWrapper
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk&v=3"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        // defaultZoom={10}
        zoom={this.props.zoom}
        // defaultCenter={{lat: 25.052153, lng: 121.54401}}
        center={this.props.center}
        onMapMounted={this._handleMapMounted}
        onBoundsChanged={this._handleBoundsChanged}
        defaultOptions={{
          mapTypeControl: false,
          // fullscreenControl: false,
          streetViewControl: false,
          // disableDefaultUI: true
        }}
      >
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={30}>
          {this.state.stores.map(store => (
            <Marker
              key={store.ID}
              position={{
                lat: parseFloat(store.STORE_LAT),
                lng: parseFloat(store.STORE_LNG),
              }}
              icon={{ url: this.state.logo40Route + store.STORE_LOGO_NAME }}
              onClick={this.onMarkerClick.bind(this, store)}
            />
          ))}
        </MarkerClusterer>
      </GoogleMapsWrapper>
    )
  }
}

export default MapBody
