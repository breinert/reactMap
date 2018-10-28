import React from 'react'
import SearchVenues from './SearchVenues'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
    <h2 className="title">Cycle And Coffee</h2>
    <h2 className="venuebar">Venues</h2>
      <SearchVenues
      markers = {props.markers}
      showinVenues = {props.showingVenues}
      query = {props.query}
      click = {props.click}
      updateQuery = {props.updateQuery}
      clearQuery = {props.clearQuery}
      />
      <ol className="venueList">
      {/* put the venues on the sidebar */}
        {props.showingVenues
        && props.showingVenues.map((marker, idx) => {
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
