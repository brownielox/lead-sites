import React, { Component } from 'react';
import Heading from './Heading';
import Map from './Map';
import Distances from './Distances'
import ReadingsForm from './ReadingsForm'
import logo from './logo.svg';
import StuffList from './StuffList'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {lat: 0, lng: 0, readings:[], userData:false};
  }

  storeLatLng(lat, lng) {
    this.setState({lat: lat, lng: lng})
  }

  onClick(){
    this.setState({userData:!(this.state.userData)})
    fetch('/contributors')
    .then((response) => response.json())
    .then((responseJSON) => {
      this.onFetch(responseJSON)
    })
  }

  onFetch(response) {
    this.setState({
      readings: response
      })
    }


  render() {
    return (
      <div className="App">
        <Heading />
        <div id="map_holder"><Map userLocations={this.state.readings} userData={this.state.userData}/></div>
        <Distances />
        <Button onClick={() => {this.onClick()}}>User provided data</Button>
      </div>
    );
  }
}

export default App;
