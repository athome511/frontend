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

    request.get(`/users/`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }

  render() {
    return (

        <div className="requestCard">
        <a href="#" className="container">
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
                </a>
        </div>


    );
  }
}


export default Requests;
