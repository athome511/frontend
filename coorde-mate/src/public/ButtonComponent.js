import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class ButtonComponent extends React.Component {

  render() {
    const button = {
      backgroundColor: this.props.colorBg,
      color: 'white',
      height:40,
      fontSize: '2.0rem',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
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
