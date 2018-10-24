import React from 'react'

const Sidebar = (props) => {
  return (
  <div className="sidebar">
    <h2 className="title">Venuelist</h2>
      <ol className="venueList">
      {props.markers && props.markers.map((marker, idx) => (
        <li
        className="listItem"
        key={idx}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => props.handleMouseOver(marker)}
        // onMouseOut={() => props.handleMouseOut(marker)}
        onDblClick={() => props.handleGetNewData(marker)}
        // onFocus={() => this.props.handleMouseOver(marker)}
        tabIndex={1}
        >{marker.name}
        </li>
        )
      )}
      </ol>
  </div>
  )
}
export default Sidebar
