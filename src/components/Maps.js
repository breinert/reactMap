import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, BicyclingLayer, Marker, InfoWindow } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 40.027587, lng: -83.0624 }}
  >
    {props.markers && props.markers.map((marker, idx) => (
      <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} >
        {marker && (
          <InfoWindow>
          <p>coffee</p>
          </InfoWindow>
        )}
      </Marker>
    ))}
    <BicyclingLayer autoUpdate />
  </GoogleMap>
))
class Map extends React.Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUZDt6xP79oqTXaAB6leSmMCYzZkc4Zdo"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
    )
  }
}
export default Map