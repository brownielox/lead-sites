import React, { Component } from 'react';
import { connect } from 'react-redux'
import compare from 'compare-lat-lon'
import { bindActionCreators } from 'redux'
import * as mapActions from './actions/mapActions'
import Distance from './Distance'

class Distances extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount(){
    fetch('/lead_sites')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.props.mapActions.loadLocations(data);
    })
  }

  callAPI = () => {
    //fetch call to backend to grab index of items being saved on backend
    fetch('/contributors').then((response) => {
      console.log(response.json())
    });
  }

    render() {
      function mySort(a, b){
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      };

      if (!this.props.positions.lat){
        var orderedList = <p>Click on the map to find your distance from the smelting sites.</p>
      }
      else {
        //locations via mapStateToProps
        var distances = this.props.locations.map((location, index) => {
          var dist = compare(
            this.props.positions.lat,
            this.props.positions.lng,
            location.lat,
            location.lng
          );
            return [parseFloat((dist).toFixed(3)), location.name, location.address, index]
          });
          distances = distances.sort(mySort);
          distances = distances.filter(entry => {
            return entry[0] <= 5
          })
          orderedList = distances.map((entry, props) => {
            //constantIndex is the position of this location in original json object
            let constantIndex = entry[3];
            return <Distance
              key={constantIndex}
              name={entry[1]}
              address={entry[2]}
              distance={entry[0]}
              likes={this.props.locations[constantIndex].likes}
              index={constantIndex}
            />
          })
      }
      return <div>{orderedList}</div>;
    }
}

function mapStateToProps(state) {
  return {
    positions: state.positions,
    locations: state.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mapActions: bindActionCreators(mapActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Distances);
