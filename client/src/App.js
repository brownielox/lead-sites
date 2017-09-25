import React, { Component } from 'react';
import Heading from './Heading';
import Map from './Map';
import Distances from './Distances'
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
        <div id="map_holder"><Map userLocations={this.state.readings} userData={this.state.userData}/></div><br/>
        <Button onClick={() => {this.onClick()}}>Click for user-provided data (in ppm)</Button><br/><br/>
        <Distances />
      </div>
    );
  }
}

export default App;
