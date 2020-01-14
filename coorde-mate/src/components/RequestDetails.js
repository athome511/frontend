import React from 'react';
import axios from 'axios';

import RequestDetailsUser from './RequestDetailsUser';


//依頼詳細画面
class RequestDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      requestDatas: []
    };
  }

/*
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

    request.get(`/users/1`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }
  */
  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    //this.props.match.params.requestId でURLを取得してる
    //依頼情報の取得
    request.get(`/requests/${this.props.match.params.requestId}`)
    .then(res => {
      this.setState({
        requestDatas: res.data
      });
    })


    //依頼ユーザ情報の取得
    /*
    request.get(`/users/${this.state.requestDatas.r_u_id}`)
    .then(res => {
      this.setState({
        userDatas: res.data
      });
    })
    */
  }





  render() {
    return (
      <div>
        <h1>依頼詳細</h1>
        <RequestDetailsUser
          userId = "3"
        />
        <p>requestTitle : {this.state.requestDatas.r_title}</p>
      </div>
    );
  }
}
export default RequestDetails;
