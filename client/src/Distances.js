import React from 'react';
import { connect } from 'react-redux'
import compare from 'compare-lat-lon'

let locations = require('./data/LeadSites');

class Distances extends React.Component {

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
        var distances = locations.map((location, index) => {
          var dist = compare(
            this.props.positions.lat,
            this.props.positions.lng,
            location.lat,
            location.lng
          );
            return [parseFloat((dist).toFixed(3)), location.name, location.address]
          });
          distances = distances.sort(mySort);
          distances = distances.filter(entry => {
            return entry[0] <= 5
          })
          orderedList = distances.map((entry, index) => {
            return <div key={index}>{entry[1]} <br/>{entry[2]} <br/> {entry[0]} miles away<br/><br/></div>
          })
      }
      return <div>{orderedList}</div>;
    }
}

function mapStateToProps(state) {
  return {
    positions: state.positions
  };
}

export default connect(
  mapStateToProps,
  null
)(Distances);
