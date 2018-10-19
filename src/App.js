import React, { Component } from 'react';
// import { GoogleMap, Marker } from 'react-google-maps';
import Maps from './components/Maps'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      venueLocation: [],
      markers: [
        {lat: 40.0784, lng: -83.0377},
        {lat: 40.0440, lng: -83.0253},
        {lat: 40.0261, lng: -83.0225},
        {lat: 40.0438, lng: -83.0717},
        {lat: 40.0535, lng: -83.0846},
        {lat: 40.023258, lng: -83.087907},
        {lat: 40.002127, lng: -83.021716},
      ],
    };
  }

  // componentDidMount() {
  //   // if (prevState.venueLocation !== this.state.venueLocation){
  //     this.getStores()
  // }

  getStores() {
    // const location = this.state.venueLocation;
    // console.log(props.venueLocation);
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "JDO1KAGDULQO3ETFJ4EDPEHN203BEDKSD1HB5UUKRDP2R3H2",
      client_secret: "UWMFNIMGT33V31ZGCVI1GICMRK43DSYBJSNBNJTKC2ECKIHH",
      query: "coffee",
      limit: "5",
      ll: "40.027587, -83.0624",
      v: "201811010",
    }
    // const venues = this.state.venues;
    // const markers = this.state.markers;
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
        const { venues } = response.data.response.groups[0].items;
        const { markers } = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true
          };
        })
        this.setState({ venues, markers });
        console.log(response, venues, markers);
      })
      .catch(error => {
        console.error("error", error)
    })

  }


  render() {
    return (
      <div className="App">
        <main>
          <Maps
          {...this.state}
          />
        </main>
      </div>
    );
  }
}

export default App;
