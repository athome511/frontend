import React from 'react';
import axios from 'axios';

/* myComponents */
import RequestCard from './RequestCard';

import '../css/timeLine.css';

//import img from '../img/iconSample.jpg';

class TimeLine extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001/'
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
        {this.state.datas.map((requestData) => {
          return (
            <div>
              <RequestCard
                requestId = {requestData.id}
                title = {requestData.r_title}
                limit = {requestData.r_limit}
                memo = {requestData.r_memo}
                userId = {requestData.r_u_id}
              />
            </div>

          )
        })}
      </div>
    );
  }
}

export default TimeLine;
