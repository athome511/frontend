import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class RequestCard extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    }
  }

  /*
  constructor() {
  super();
  this.state = {
    data: [],
    baseURL: 'http://18.178.35.28:3001/'
  }
}

  componentWillMount() {
  const request = axios.create({this.state.baseURL})
}
  */

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001/'
    })

    request.get(`/users/${this.props.userId}/`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })

  }
/*
  setId(requestId, userId) {
    this.setState({
      requestId: requestId,
      userId: userId;
    })
  }*/

  render() {
    return (

        <div className="requestCard">
          {/* 依頼詳細画面へのリンク */}
          <Link to={`/request/${this.props.requestId}`} key={this.props.requestId} className="container"
          >
            <div className="icon">
              <img src={this.state.datas.u_icon} alt={this.state.datas.u_name} />
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
          </Link>
        </div>


    );
  }
}


export default RequestCard;
