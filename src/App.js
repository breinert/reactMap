import React, { Component } from 'react';
// import { GoogleMap, Marker } from 'react-google-maps';
import Map from './components/Maps'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Map/>
        </main>
      </div>
    );
  }
}

export default App;
