import React from 'react';
import axios from 'axios';


class Requests extends React.Component {
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

    request.get(`/users/${this.props.match.params.userId}`)
    .then(res => {
      this.setState({
        datas: res
      });
    })
  }

  render() {
    return (
      <a href="#" className="container">
        <div className="requestCard">
          <div className="icon">
          </div>
          <div className="requestText right">
            <div className="requestTitle">
              <h2>{this.props.title}</h2>
            </div>
            <div className="requestMemo">
              <p>{this.props.memo}</p>
            </div>
            <div className="requestLimit">
              <p>{this.props.limit}</p>
            </div>
          </div>
        </div>
      </a>

    );
  }
}


export default Requests;
