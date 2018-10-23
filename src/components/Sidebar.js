import React from 'react'

const Sidebar = (props) => {

    return (
    <div className="sidebar">
      <h2 className="title">Venuelist</h2>
        <div className="venueList">
        {props.markers && props.markers.map((marker, idx) => (
          <button
          className="listItem"
          key={idx}
          position={{ lat: marker.lat, lng: marker.lng }}
          onMouseOver={() => props.handleMouseOver(marker)}
          onMouseOut={() => props.handleMouseOut(marker)}
          onClick={() => props.handleGetNewData(marker)}
          // onFocus={() => this.props.handleMouseOver(marker)}
          tabIndex={1}
          >{marker.name}
          </button>
        ))}
        <div className="venueOfInterest">
        {props.venueOfInterest}
        </div>
        </div>
    </div>
    )
  }
export default Sidebar
