import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class ButtonComponent extends React.Component {

  render() {
    return (
        <Button variant="contained">
          <Link to={`${this.props.link}`} >{this.props.buttonText}</Link>
        </Button>
    );
  }
}

export default ButtonComponent;
