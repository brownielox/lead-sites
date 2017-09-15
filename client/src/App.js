import React, { Component } from 'react';
import Heading from './Heading';
import Map from './Map';
import Distances from './Distances'
import Buttons from './Buttons'
import UserInput from './UserInput'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {lat: 0, lng: 0};
  }

  storeLatLng(lat, lng) {
    this.setState({lat: lat, lng: lng})
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <div id="map_holder"><Map pinDrop={this.storeLatLng.bind(this)} pinLat={this.state.lat} pinLng={this.state.lng}/></div>
        <Distances />
        <Buttons />
        <UserInput />
      </div>
    );
  }
}

export default App;
