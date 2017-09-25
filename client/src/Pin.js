import React, { Component } from 'react';
import { userPinStyle } from './MyPlaceStyles.js';

export default class MyPlace extends Component {

static defaultProps = {};
  render() {
    return (
       <div style={userPinStyle}>{this.props.reading}</div>

    );
  }
}
