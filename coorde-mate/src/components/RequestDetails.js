import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

//myComponent
import ButtonComponent from '../public/ButtonComponent'
import RequestDetailsCard from './RequestDetailsCard';
import ClothsTile from './ClothsTile';


//依頼詳細画面
class RequestDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      requestDatas: [],
      userDatas: []
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    //this.props.match.params.requestId でURLを取得してる
    //依頼情報の取得
    request.get(`/requests/${this.props.match.params.requestId}`)
    .then(res => {
      this.setState({ requestDatas: res.data })
      this.setUser(request, this.state.requestDatas.r_u_id)
    })
  }

  setUser(request, userId) {
    request.get(`users/${userId}`)
    .then(res => {
      this.setState({ userDatas : res.data})
    })
  }


  render() {
    return (
      <div>
        <RequestDetailsCard
          requestId = {this.state.requestDatas.id}
          userId = {this.state.userDatas.id}
          userIcon = {this.state.userDatas.u_icon}
          userName = {this.state.userDatas.u_name}
          title = {this.state.requestDatas.r_title}
          limit = {this.state.requestDatas.r_limit}
          memo = {this.state.requestDatas.r_memo}
          />

        <p>userName : {this.state.userDatas.u_name}</p>
        <p>requestTitle : {this.state.requestDatas.r_title}</p>

        {/* 所有服一覧表示 */}
        <div className="container">
          <ClothsTile
            userId = {this.state.userDatas.id}
          />
        </div>

        {/*<Link to={`/request/submit/${this.state.requestDatas.id}`} >
          <ButtonComponent
            buttonText = "提案する"
          />
        </Link>*/}
        <ButtonComponent
          link = {`/request/${this.state.requestDatas.id}/submit`}
          buttonText = "提案する"
        />



      </div>
    );
  }
}
export default RequestDetails;
