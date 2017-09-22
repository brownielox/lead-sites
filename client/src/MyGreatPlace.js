import React, {PropTypes, Component} from 'react';
import {greatPlaceStyle} from './MyGreatPlaceStyles.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
       <div style={this.props.style}data-tip={this.props.address}></div>
    );
  }
}
