import React from 'react';
//import axios from 'axios';
//import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readRequestDetails } from '../actions';

//myComponent
import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';
import ClothsTile from './ClothsTile';
import ProposalCard from './ProposalCard';


//依頼詳細画面
class RequestDetails extends React.Component {
  /*constructor(){
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
  }*/

  componentDidMount() {
    this.props.readRequestDetails(this.props.match.params.requestId)
  }


  render() {
    const props = this.props

    return (
      <div>

        {/*<RequestDetailsCard
          requestId = {props.events.id}
          userId = {props.events.r_u_id}
          title = {props.events.r_title}
          limit = {props.events.r_limit}
          memo = {props.events.r_memo}
          />*/}
          <RequestCard
            key = {props.events.id}
            requestId = {props.events.id}
            title = {props.events.r_title}
            limit = {props.events.r_limit}
            memo = {props.events.r_memo}
            userId = {props.events.r_u_id}
            borderStyle = {"none"}
            />



        <p>userName : {props.events.u_name}</p>
        <p>userId : {props.events.r_u_id}</p>


        <div className="container">
          <ClothsTile
          />
        </div>

        <ButtonComponent
          link = {`/proposal/${this.props.match.params.requestId}/submit`}
          buttonText = "提案する"
        />


      <ProposalCard
        requestId = {props.events.id}
      />


      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readRequestDetails })

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
