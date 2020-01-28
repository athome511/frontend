import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class ButtonComponent extends React.Component {

  render() {
    const button = {
      backgroundColor:'#ff9800',
      color:'white'
    }
    return (
          <Link to={`${this.props.link}`} >
            <Button variant="contained" style={button}>
              {this.props.buttonText}
            </Button>
          </Link>

    );
  }
}

export default ButtonComponent;
