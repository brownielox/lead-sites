import React from 'react';
import Client from './Client';
import ReadingsForm from './ReadingsForm';
import { Button } from 'react-bootstrap';


class Buttons extends React.Component {
    render() {
      return (
        <div>
          <Button><a href="/submit">Add Values</a></Button>
          <Button><a href="/about">About</a></Button>
          <Button>Smelting Locations</Button>
          <Button>User provided data</Button>
        </div>
      )
    }
}

export default Buttons;
