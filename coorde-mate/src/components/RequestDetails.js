import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readRequestDetails } from '../actions';

//myComponent
import Loading from '../public/Loading';

import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';
import ClothsTile from './ClothsTile';
import ProposalCard from './ProposalCard';


//依頼詳細画面
class RequestDetails extends React.Component {

  componentDidMount() {
    this.props.readRequestDetails(this.props.match.params.requestId)
  }

  setClothsAndProposalData() {
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })
    //依頼idをローカルストレージへ
    if(this.props.events.id !== undefined) {
      request.get(`/requests/${this.props.events.id}`)
      .then(res => {
        localStorage.setItem('requestData', JSON.stringify(res.data))
      })
    }
    if(this.props.events.r_u_id !== undefined) {
      request.get(`/cloths/${this.props.events.r_u_id}`)
      .then(res => {
        localStorage.setItem('clothsData', JSON.stringify(res.data))
      })
    }

    const requestState = JSON.parse(localStorage.getItem('requestData'))
    return (
      <RequestCard
        key = {requestState.id}
        requestId = {requestState.id}
        title = {requestState.r_title}
        limit = {requestState.r_limit}
        memo = {requestState.r_memo}
        userId = {requestState.r_u_id}
        borderStyle = {"none"}
        />
    )



  }

  render() {
    const props = this.props
    return (
      <div>
        {this.setClothsAndProposalData()}

        {/*<RequestDetailsCard
          requestId = {props.events.id}
          userId = {props.events.r_u_id}
          title = {props.events.r_title}
          limit = {props.events.r_limit}
          memo = {props.events.r_memo}
          />
          <RequestCard
          key = {props.events.id}
          requestId = {props.events.id}
          title = {props.events.r_title}
          limit = {props.events.r_limit}
          memo = {props.events.r_memo}
          userId = {props.events.r_u_id}
          borderStyle = {"none"}
          />*/}



          <p>userName : {props.events.u_name}</p>
          <p>userId : {props.events.r_u_id}</p>

          {/*
            <ButtonComponent
            link = {`/request/${props.events.id}/cloths/${props.events.r_u_id}`}
            buttonText = "服を見る"
            />*/}


            <ClothsTile />

            <ButtonComponent
              link = {`/proposal/${this.props.match.params.requestId}/submit`}
              buttonText = "提案する"
              />


            <ProposalCard
              />


          </div>
        );
      }
    }

    const mapStateToProps = state => ({ events: state.events })
    const mapDispatchToProps = ({ readRequestDetails })

    export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
