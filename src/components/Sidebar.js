import React from 'react'

const Sidebar = (props) => {
  return (
  <div className="sidebar">
    <h2 className="title">Venues</h2>
      <ol className="venueList">
        {props.markers && props.markers.map((marker, idx) => {
          return (
            <li
            className="listItem"
            key={idx}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {if (marker.isOpen === false) {props.handleOnClick(marker)}}}
            tabIndex={2}
            >{marker.name}
            </li>
          )}
        )}
      </ol>
  </div>
  )
}
export default Sidebar
