import React, {Component} from 'react';
import Map from './Map';
import Heading from './Heading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import * as stuffActions from './actions/stuffActions'

class ReadingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reading: null
    };
  }

  submitReading(){
    fetch('/contributors', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        lat: this.props.positions.lat,
        lng: this.props.positions.lng,
        reading: this.state.reading
      })
    }).then(e => {browserHistory.push('/')})
  }
  render(){
    return <div className="App">
      <Heading/>
      <div id="map_holder"><Map/></div>
      <h3>Had your soil tested?</h3>
      <p>Click the map to pinpoint your location, then add the test results (in ppm) to our database below.</p>
      <form id='a_form'>
        Reading:<br/><input onChange={(event) =>{this.setState({reading: parseInt(event.target.value, 10)})}} type="text" id="reading" label="reading"/> ppm
      </form>
        <button onClick={() =>{this.submitReading()}}>Submit my measurements</button>
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
