import React, {PropTypes, Component} from 'react';
import {userPinStyle, herePinStyle} from './MyPlaceStyles.js';

export default class MyPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

static defaultProps = {};
  render() {
    return (
       <div style={userPinStyle}>{this.props.reading} ppm</div>

    );
  }
}
