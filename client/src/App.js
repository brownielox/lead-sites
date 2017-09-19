import React, { Component } from 'react';
import Heading from './Heading';
import Map from './Map';
import Distances from './Distances'
import Buttons from './Buttons'
import ReadingsForm from './ReadingsForm'
import logo from './logo.svg';
import StuffList from './StuffList'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
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
        <div id="map_holder"><Map/></div>
        <Distances />
        <Buttons />
      </div>
    );
  }
}

export default App;
