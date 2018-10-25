/*global google*/
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, BicyclingLayer, Marker, InfoWindow } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.027587, lng: -83.0624 }}
    center={props.center[0] || props.center}
  >
  {props.markers && 
  props.markers.map((marker, idx) => {
    const venueInfo = props.venues.find(venue => venue.venue.id === marker.id);
    console.log(venueInfo);
      return (
        <Marker
        key={idx}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => props.handleOnClick(marker)}
        animation={marker.isOpen
          ? google.maps.Animation.BOUNCE
          : google.maps.Animation.null}
        >
          {marker.isOpen && props.click <= 1 && (
            <InfoWindow
            onCloseClick={() => props.handleCloseMarker(marker)}>
              <p>{props.markers.name}</p>
            </InfoWindow>
          )}
          {marker.isOpen && props.click > 1 && (
            <InfoWindow
            onCloseClick={() => props.handleCloseMarker(marker)}>
              <figure>
                <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`}
                alt={"Venue"}/>
                <figcaption>{venueInfo.name} {<br></br>}
                {venueInfo.location.address} {<br></br>}
                {venueInfo.hours.status}
                <a href={`${venueInfo.url}`}>Link</a> </figcaption>
              </figure>
            </InfoWindow>
          )}
        </Marker>
      )}
    )}
    <BicyclingLayer autoUpdate />
  </GoogleMap>
))
class Map extends React.Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUZDt6xP79oqTXaAB6leSmMCYzZkc4Zdo"
        loadingElement={<div style={{ height: `100vh` }} />}
        containerElement={<div style={{ height: `100vh`, width: `75%` }} />}
        mapElement={<div style={{ height: `100vh` }} />}/>
    )
  }
}
export default Map
