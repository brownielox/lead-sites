import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './MyGreatPlace'
import Pin from './Pin'
let locations = require('./LeadSites');


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 39.9582, lng: -75.1731},
    zoom: 11
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
      this.props.pinDrop(lat, lng);
      var compare = require('compare-lat-lon');
      var final = locations.map((location) => {
        return [compare(lat, lng, location.lat, location.lng), location.name];
      });
      console.log(final.sort());
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
          lat={this.props.pinLat}
          lng={this.props.pinLng}
          // name={locations[0].name}
        />
      </GoogleMapReact>
    );
  }
}
