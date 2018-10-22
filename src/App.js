import React, { Component } from 'react'
import Maps from './components/Maps'
import StartModal from './components/StartModal'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      click: 0,
      venues: [],
      venueLocation: [],
      center: [
        {lat: 40.027587, lng: -83.0624}
      ],
      markers: [
        {lat: 40.0784, lng: -83.0377},
        {lat: 40.0440, lng: -83.0253},
        {lat: 40.0261, lng: -83.0225},
        {lat: 40.0438, lng: -83.0717},
        {lat: 40.0535, lng: -83.0846},
        {lat: 40.023258, lng: -83.087907},
        {lat: 40.002127, lng: -83.021716},
      ],
      names:  [
        'Antrim Park',
        'Park of Roses',
        'Clinton-Como Park',
        'Thompson Park',
        'Burbank Park',
        'Fancyburg Park',
        'Olentangy Trail',
    ]
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleGetNewData = this.handleGetNewData.bind(this);
  }

  getStores() {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "JDO1KAGDULQO3ETFJ4EDPEHN203BEDKSD1HB5UUKRDP2R3H2",
      client_secret: "UWMFNIMGT33V31ZGCVI1GICMRK43DSYBJSNBNJTKC2ECKIHH",
      query: "coffee",
      limit: "5",
      ll: this.state.venueLocation,
      v: "201811010",
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
        const venues = response.data.response.groups[0].items;
        const markers = venues.map(venue => {
          return {
            lat: venue.venue.location.lat,
            lng: venue.venue.location.lng,
            name: venue.venue.name,
            id: venue.venue.id,
            isOpen: false,
            isVisible: true
          };
        });
        this.setState({ venues, markers });
      console.log(this.state.venues, this.state.markers );
    })
      .catch(error => {
        console.error("error", error)
      })
  }

  getVenueInfo = () =>{

  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleGetNewData = (marker) => {
    if (this.state.click === 0) {
      this.setState({
        venueLocation: [marker.lat, marker.lng],
        center: { lat: marker.lat, lng: marker.lng },
        markers: [],
        names: [],
        click: this.state.click + 1
      });
      this.getStores()
    } else {
      this.getVenueInfo()
    }
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    })
    this.setState({
      markers: Object.assign(this.state.markers, markers)
    })
  }

  handleMouseOver = (marker) => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    })
  }

  render() {
    return (
      <div className="App">
        <Maps
        {...this.state}
        handleMouseOver = {this.handleMouseOver}
        handleGetNewData = {this.handleGetNewData}
        />
        <StartModal
        {...this.state}
        handleClose = {this.handleClose}
        />
        <Sidebar
        {...this.state}
        />
      </div>
    );
  }
}

export default App;
