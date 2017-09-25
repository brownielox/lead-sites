import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router'

class Heading extends React.Component {
    render() {
      return(
      <div>
        <h2>Fishtown Smelting Location Finder</h2>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/submit"><Button>Contribute Data</Button></Link>
        <Link to="/about"><Button>About</Button></Link>
        <br/><br/>
      </div>
    )}
}

export default Heading;
