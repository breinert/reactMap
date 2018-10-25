import React from 'react'

const Sidebar = (props) => {
  return (
  <div className="sidebar">
    <h2 className="title">Venues</h2>
      <ol className="venueList">
      {props.markers && props.markers.map((marker, idx) => {
        // const venueInfo = props.venues.find(venue => venue.venue.id === marker.id);
          return (
            <li
            className="listItem"
            key={idx}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => props.handleOnClick(marker)}
            tabIndex={1}
            >{marker.name}
            </li>
          )}  
      )}
      </ol>
  </div>
  )
}
export default Sidebar
