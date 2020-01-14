import React from 'react';

class RequestDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }

  render() {
    return (
      <h1>{this.props.userId}</h1>
    );
  }
}
export default RequestDetails;
