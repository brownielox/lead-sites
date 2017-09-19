import React from 'react';
import Client from './Client';
import { connect } from 'react-redux'

class Distances extends React.Component {



    render() {
      return <p>{this.props.positions.lat}</p>
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
