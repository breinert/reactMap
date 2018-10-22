import React from 'react'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  searchVenues = (query) => {
    this.setState({
      query: query
    });
    const markers = this.props.venues.map(venue => {
      const isMatched = venue.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const marker = this.props.markers.find(marker => marker.id === venue.id);
    if (isMatched) {
      marker.isVisible = true;
    } else {
      marker.isVisible = false;
    }
    return marker;
    });
    this.props.updateSuperState({ markers });
  }
  render() {
    return (
    <div className="sidebar">
      {/* <h2 className="title">Venuelist</h2> */}
      <input id="search"
      type="search"
      placeholder="Filter Venues"
      value={this.state.query}
      onChange={(event) => this.searchVenues(event.target.value)}
      />
        <ol className="venueList">
        {this.props.markers && this.props.markers.map((marker, idx) => (
          <li className="listItem"
            key={idx}
            {...marker}
            onClick={() => this.props.handleGetNewData(marker)}
            onMouseOver={() => this.props.handleMouseOver(marker)}
            onMouseOut={() => this.props.handleMouseOut(marker)}
            >{marker.name}
          </li>
        ))}
        </ol>
    </div>
    )
  }
}
export default Sidebar
