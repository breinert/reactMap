import React from 'react'

const SearchVenues = (props) => {
  const searchWrapper = props.click === 1 ? 'searchWrapper display-block' : 'searchWrapper display-none';
  // let showingVenues

  return (
    <div className={searchWrapper}>
        <input
        type="text"
        placeholder="Search by name"
        value={props.query}
        onChange={(event) => props.updateQuery(event.target.value)}
        />
        {props.showingVenues.length !== props.markers.length && (
          <div className="showingVenues">
            <span>Now Showing {props.showingVenues.length} of {props.markers.length}. </span>
            <button
            className="filterButton"
            onClick={props.clearQuery}>Show all</button>
          </div>
        )}
      </div>
  )
}
export default SearchVenues
