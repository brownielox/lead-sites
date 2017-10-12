import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {addLikes} from './actions/mapActions'

class Distance extends Component {

  handleLike = (constantIndex) => {

    //pushes new like to redux state to avoid extra api call
    this.props.addLikes(constantIndex)
  }
  render(){

    console.log(this.props);

    return(
        <div>{this.props.name} <br/>{this.props.address} <br/> {this.props.distance} miles away<br/><br/>
        <button onClick={() => {this.handleLike(this.props.index)}}>Like </button>{this.props.likes}
        </div>
      )
    }
  }


export default connect(
  null,
  {addLikes}
)(Distance);
