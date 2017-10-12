import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mapActions from './actions/mapActions'

class Distance extends Component {

  render(){
    let handleLike = (id, likes) => {
      var url = '/lead_sites/' + (id + 1)
      fetch(url, {
        method: 'PATCH',
      })
      this.props.mapActions.addLikes(id, likes)
    }

    return(
        <div>{this.props.name} <br/>{this.props.address} <br/> {this.props.distance} miles away<br/><br/>
        <button onClick={() => {handleLike(this.props.index, this.props.likes)}}>Like </button>{this.props.likes}
        </div>
      )
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    mapActions: bindActionCreators(mapActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Distance);
