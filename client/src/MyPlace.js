import React, {PropTypes, Component} from 'react';
import {placeStyle, userPinStyle, herePinStyle} from './MyPlaceStyles.js';

export default class MyPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    var chooseStyle
    var dataTip
    if (!this.props.reading && !this.props.address){
      chooseStyle = placeStyle;
      dataTip = "Your pin";
    }
    if(this.props.address){
      chooseStyle = herePinStyle;
      dataTip = this.props.name;
    }
    if(this.props.reading){
      chooseStyle = userPinStyle;
    }

    return (
       <div style={chooseStyle} data-tip={dataTip}></div>
    );
  }
}
