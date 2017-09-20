import React, {Component} from 'react';
import Map from './Map';
import Pin from './Pin';
import Heading from './Heading'
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './MyGreatPlace'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stuffActions from './actions/stuffActions'

let locations = require('./LeadSites');

class ReadingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reading: null
    };
  }

  submitReading(){
      fetch('/contributors', {
        method: "POST",
        accept: 'application/json',
        body: {
          reading: this.state.reading,
          lat: this.props.positions.lat,
          lng: this.props.positions.lng},

  }).then(function(response) {
    // response.status     //=> number 100–599
    // response.statusText //=> String
    // response.headers    //=> Headers
    // response.url        //=> String

    return response.text()
  }, function(error) {
    // error.message //=> String
  })
    // console.log(this.state.reading, this.props.positions.lat, this.props.positions.lng)
}
  render(){
    return <div>
      <Heading/>
      <div id="map_holder"><Map/></div>

      <form id='a_form'>
        Reading:<br/><input onChange={(event) =>{this.setState({reading: event.target.value})}} type="text" id="reading" label="reading"/> ppm
      </form>
        <button onClick={() =>{this.submitReading()}}>Submit Measurements</button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    positions: state.positions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingsForm);
