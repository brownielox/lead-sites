import React, { Component } from 'react'

class Distance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eachLike: 0
    };
  }

  addLikes() {
    this.setState({eachLike: this.state.eachLike + 1
    });
  }


  render(){
    console.log(this.props)
    return(
      <div>{this.props.entry[1]} <br/>{this.props.entry[2]} <br/> {this.props.entry[0]} miles away<br/>
      <button onClick={() =>{this.addLikes()}}>like</button> {this.state.eachLike}</div>
    )
  }

}

export default Distance;
