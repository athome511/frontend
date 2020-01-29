import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import '../css/btn.css';

class ButtonComponent extends React.Component {

  render() {
    const button = {
      backgroundColor:'#ff9800',
      color:'white',
      height: 43,
      fontSize: '2rem',
      marginTop: 30,
      margin: 'auto'
    }
    return (
      <div className="btn">
        <Link to={`${this.props.link}`} >
          <Button variant="contained" style={button}>
            {this.props.buttonText}
          </Button>
        </Link>
      </div>
    );
  }
}

export default ButtonComponent;
