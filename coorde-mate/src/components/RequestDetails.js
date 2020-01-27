import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readRequestDetails } from '../actions';

//myComponent
//import Loading from '../public/Loading';

import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';
import ClothsTile from './ClothsTile';
import ProposalCard from './ProposalCard';


//依頼詳細画面
class RequestDetails extends React.Component {

  componentWillMount() {
    this.props.readRequestDetails(this.props.match.params.requestId)
  }

  setClothsAndProposalData() {
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    //依頼idをローカルストレージへ
      request.get(`/requests/${this.props.match.params.requestId}`)
      .then(res => {
        localStorage.setItem('requestData', JSON.stringify(res.data))
      })

      const requestState = JSON.parse(localStorage.getItem('requestData'))

      request.get(`/cloths/${requestState.r_u_id}`)
      .then(res => {
        localStorage.setItem('clothsData', JSON.stringify(res.data))
      })





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
        <p>userName : {props.events.u_name}</p>
        <p>userId : {props.events.r_u_id}</p>

        <ClothsTile
          userId={props.events.r_u_id}
          />

        <ButtonComponent
          link = {`/proposal/${this.props.match.params.requestId}/submit`}
          buttonText = "提案する"
          />


        <ProposalCard
          requestId = {this.props.match.params.requestId}/>


      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readRequestDetails })

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
