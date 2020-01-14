import React from 'react';
import Button from '@material-ui/core/Button';

class ButtonComponent extends React.Component {

  render() {
    return (
      <div>
        <Button variant="contained">{this.props.buttonText}</Button>
      </div>
    );
  }


}


export default ButtonComponent;
