import React from 'react';

class RequestDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3000/'
    })

    request.get(`/requests/`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }

  render() {
    return (
      <div>
        <h1>RequestComponent</h1>
      </div>
    );
  }
}

export default RequestDetails;
