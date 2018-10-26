import React from 'react'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
    <h2 className="title">Cycle And Coffee</h2>
    <h2 className="venuebar">Venues</h2>
      <ol className="venueList">
      {/* map the markers to the sidebar venue list */}
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
