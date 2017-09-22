import React, {PropTypes, Component} from 'react';
import {userPinStyle, herePinStyle} from './MyGreatPlaceStyles.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

static defaultProps = {};
  render() {
    return (
       <div style={this.props.pinStyle} data-tip={"hello"}></div>
    );
  }
}
