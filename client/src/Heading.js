import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router'

class Heading extends React.Component {
    render() {
      return(
      <div>
        <h1 align="center">Philadelphia Smelting Location Finder</h1>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/submit"><Button>Add Values</Button></Link>
        <Link to="/about"><Button>About</Button></Link>
        <br/><br/>
      </div>
    )}
}

export default Heading;
