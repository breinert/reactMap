import React from 'react'

const SearchVenues = (props) => {
  // display searchbox if coffee locations are listed
  const searchWrapper = props.click >= 1 ? 'searchWrapper display-block' : 'searchWrapper display-none';

  return (
    <div className={searchWrapper}>
        <input
        id="filter"
        type="text"
        placeholder="Search by name"
        role="search"
        value={props.query}
        onChange={(event) => props.updateQuery(event.target.value)}
        />
        {/* reset the search */}
        <button
        className="filterButton"
        aria-label="search reset"
        onClick={() => props.clearQuery()}>Show all</button>
    </div>
  )
}
export default SearchVenues
