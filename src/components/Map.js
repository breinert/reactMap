/*global google*/
import React from 'react'

class Map extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      startPosition: [],
      finishPosition: [],
      venues: [],
      venueLocation: "",
      coffeeLocation: "choose",
    }
  }
  // initialize the map
  componentDidMount() {
    this.loadMap()
  }
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDUZDt6xP79oqTXaAB6leSmMCYzZkc4Zdo&callback=initMap")
    window.initMap = this.initMap
  }

  //function to make the google map
  initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.027587, lng: -83.0624},
      zoom: 13
    });
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);

    const markerStart = new google.maps.Marker({
      position: {lat: 40.0784, lng: -83.0377},
      map: map,
      title: 'Start',
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    markerStart.setMap(map);

    const markerFinish = new google.maps.Marker({
      position: {lat: 40.0440, lng: -83.0253},
      map: map,
      title: 'Finish',
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    markerFinish.setMap(map);

    // const self = this;

    // markerStart.addListener('dragend', function (event) {
    //   let startPosition = self.state.startPosition;
    //   markerStart.setAnimation(google.maps.Animation.BOUNCE)
    //   self.setState({
    //     startPosition: [event.latLng.lat(), event.latLng.lng()]
    //   })
    //   console.log(event.latLng.lat());
    // });
    // markerFinish.addListener('dragend', function (event) {
    //   let finishPosition = self.state.finishPosition;
    //   markerFinish.setAnimation(google.maps.Animation.BOUNCE)
    //   self.setState({
    //     finishPosition: [event.latLng.lat(), event.latLng.lng()]
    //   })
    //   console.log(event.latLng.lat());
    // });
    // const infowindow = new google.maps.InfoWindow();
    //make markers for stores
  //   this.state.venues.map(myVenue => {
  //     const marker = new google.maps.Marker({
  //       position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
  //       map: map,
  //       title: myVenue.venue.name
  //     });
  //     const contentString = `${myVenue.venue.name}`;
  //     marker.addListener('click', function() {
  //       infowindow.setContent(contentString);
  //       infowindow.open(map, marker);
  //     });
  //   })
  }

  render() {
    return (
      <div id="map">

      </div>
    )
  }
}
  function loadScript(url) {
    const index = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }
  export default Map
