import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyPlace from './MyPlace'
import Pin from './Pin'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stuffActions from './actions/stuffActions'
let locations = require('./data/LeadSites');

class Map extends Component {
  static defaultProps = {
    center: {lat: 40.000734, lng: -75.097043},
    zoom: 12
  };

  render() {
    var markerMaker = locations.map((location, index) => {
        return <MyPlace
        key={index}
        name={location.name}
        address={location.address}
        lat={location.lat}
        lng={location.lng}
      />
    })

    var userMarkerMaker =
      this.props.userData ?
      (this.props.userLocations.map((location, index) => {
        return <Pin
        key={index}
        lat={location.lat}
        lng={location.lng}
        reading={location.reading}
        />
      })) : []

    var droppedPin = this.props.positions.lat ?
        <MyPlace
          lat={this.props.positions.lat}
          lng={this.props.positions.lng}
        />: null

    var _onClick = ({x, y, lat, lng, event}) => {
      this.props.stuffActions.updateLatLng(lat, lng);
    }

    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyDeJJKWh4-s3iVMgdwSKWGg7zB8n7cqYW8"}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onClick={_onClick}
      >
        {markerMaker}
        {userMarkerMaker}
        <ReactTooltip />
        {droppedPin}
      </GoogleMapReact>
    );
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
)(Map);
