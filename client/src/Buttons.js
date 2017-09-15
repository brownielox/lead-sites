import React from 'react';
import Client from './Client';
import { Button } from 'react-bootstrap';


class Buttons extends React.Component {
    render() {
      return (
        <div>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </div>
      )
    }
}


export default Buttons;
