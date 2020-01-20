import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


/* myComponents */
import RequestCard from './RequestCard';
import ButtonComponent from '../public/ButtonComponent';



class TimeLine extends React.Component {
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

    request.get(`/requests`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }


  render() {
    return (
      <div>
        <ButtonComponent
          link = {`/request/submit`}
          buttonText = "依頼を投稿する"
        />

        {this.state.datas.map((requestData) => {
          if(!requestData.is_selected_bc) {
            return (
              <Link to={`/request/${requestData.id}`}
                 key={requestData.id}
                 className="container"
              >
                <RequestCard
                  requestId = {requestData.id}
                  title = {requestData.r_title}
                  limit = {requestData.r_limit}
                  memo = {requestData.r_memo}
                  userId = {requestData.r_u_id}
                />
            </Link>
            )
          }
        })}
      </div>
    );
  }
}

export default TimeLine;
