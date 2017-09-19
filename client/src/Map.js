import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './MyGreatPlace'
import Pin from './Pin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stuffActions from './actions/stuffActions'

let locations = require('./LeadSites');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {lat: 40.000312, lng: -75.106152},
    zoom: 12
  };

  render() {
    var markerMaker = locations.map((location, index) => {
        return <MyGreatPlace key={index}
        name={location.name}
        address={location.address}
        lat={location.lat}
        lng={location.lng}/>
      })

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
        <AnyReactComponent
          lat={39.9582}
          lng={-75.1731}
          text={'Franklin Institute'}
        />
        {markerMaker}
        <Pin
          lat={this.props.positions.lat}
          lng={this.props.positions.lng}
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
