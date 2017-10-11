import React from 'react';
import { connect } from 'react-redux'
import compare from 'compare-lat-lon'
import { bindActionCreators } from 'redux'
import * as mapActions from './actions/mapActions'

let locations = require('./data/LeadSites');

class Distances extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  callAPI = () => {
    //fetch call to backend to grab index of items being saved on backend
    fetch('/contributors').then((response) => {
      console.log(response.json())
    });
  }

  addLikesRedux = () => {
    let count = this.state.count
    this.setState({
      count: count + 1
    })
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
          orderedList = distances.map((entry, index, props) => {
            return <div key={index}>{entry[1]} <br/>{entry[2]} <br/> {entry[0]} miles away<br/><br/>
              <button onClick={this.props.mapActions.addLikes}>Like </button>{this.props.likes}
              <button onClick={this.props.mapActions.addDislikes}>Dislike </button>{this.props.dislikes}
              </div>
          })
      }
      return <div>{orderedList}</div>;
    }
}

function mapStateToProps(state) {
  return {
    likes: state.likes,
    dislikes: state.dislikes,
    positions: state.positions
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
