import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/* myComponents */
import RequestCard from './RequestCard';



class PastTimeLine extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/past_requests`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }



  render() {
    return (
      <div>
        {this.state.datas.map((requestData) => {
          return (
            <Link to={`/request/${requestData.id}`}
              key={requestData.id}
              className="container"
              >
              <RequestCard
                requestId = {requestData.id}
                title = {requestData.r_title}
                memo = {requestData.r_memo}
                userId = {requestData.r_u_id}
                />
            </Link>
          )
        })}
      </div>
    );
  }
}

export default PastTimeLine;
