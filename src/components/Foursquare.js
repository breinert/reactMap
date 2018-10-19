import React from 'react'
import axios from 'axios'

class Foursquare extends React.Component {

  static getStores(props) {
    // const location = this.state.venueLocation;
    // console.log(props.venueLocation);
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "JDO1KAGDULQO3ETFJ4EDPEHN203BEDKSD1HB5UUKRDP2R3H2",
      client_secret: "UWMFNIMGT33V31ZGCVI1GICMRK43DSYBJSNBNJTKC2ECKIHH",
      query: "coffee",
      limit: "5",
      // ll: "40.027587, -83.0624",
      v: "201811010",
      props
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error("error", error)
    })
  }
}

export default Foursquare
