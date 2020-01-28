import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class ButtonComponent extends React.Component {

  render() {
    return (
          <Link to={`${this.props.link}`} >
            <Button variant="contained">
              {this.props.buttonText}
            </Button>
          </Link>

    );
  }
}

export default ButtonComponent;
