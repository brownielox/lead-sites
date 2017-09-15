import React, {PropTypes, Component} from 'react';

import {herePinStyle} from './MyGreatPlaceStyles.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

//  {this.props.name}
  render() {
    return (
       <div style={herePinStyle}>
       </div>
    );
  }
}
