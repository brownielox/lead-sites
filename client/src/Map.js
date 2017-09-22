import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './MyGreatPlace'
import Pin from './Pin'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stuffActions from './actions/stuffActions'
import { greatPlaceStyle, herePinStyle, userPinStyle } from './MyGreatPlaceStyles'
let locations = require('./LeadSites');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {lat: 39.992454444280526, lng: -75.1028904338379},
    zoom: 12
  };

  render() {
    var markerMaker = locations.map((location, index) => {
        return <MyGreatPlace
        key={index}
        name={location.name}
        address={location.address}
        lat={location.lat}
        lng={location.lng}
        style={greatPlaceStyle}/>
      })

    var userMarkerMaker =
    this.props.userData ?
    (this.props.userLocations.map((location, index) => {
      return <MyGreatPlace
      key={index}
      lat={location.lat}
      lng={location.lng}
      reading={location.reading}
      style={userPinStyle}
      />
    })) : []

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
        <Pin
          lat={this.props.positions.lat}
          lng={this.props.positions.lng}
          pinStyle={herePinStyle}
        />
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
