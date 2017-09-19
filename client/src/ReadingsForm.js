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
    console.log(this.state.reading, this.props.positions.lat, this.props.positions.lng)
  }

  render(){
    return <div>
      <Heading/>
      <div id="map_holder"><Map/></div>

      <form id='a_form'>
        <input type='hidden' id="lat" label="lat" value={this.props.positions.lat}/>
        <input type='hidden' id="long" label="lng" value={this.props.positions.long}/>
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
