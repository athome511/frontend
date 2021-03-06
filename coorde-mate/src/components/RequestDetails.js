import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readRequestDetails } from '../actions';


import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';
import ClothsTile from './ClothsTile';
import ProposalCard from './ProposalCard';

import '../css/clothsComponent.css';

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
        memo = {requestState.r_memo}
        userId = {requestState.r_u_id}
        borderStyle = {"none"}
        shadowStyle = {"none"}
        />
    )





  }

  render() {
    const props = this.props

    const userState = JSON.parse(localStorage.getItem('userData'))
    const requestState = JSON.parse(localStorage.getItem('requestData'))
    return (
      <div style={{textAlign:'center'}}>
        {this.setClothsAndProposalData()}
        <ClothsTile
          userId = {props.events.r_u_id}
          />

          {
            (() => {
              if (props.events.is_selected_bc === false &&
                props.events.r_u_id === userState.id) {
                  return (
                    <ButtonComponent
                      link = {`/selectBc/${this.props.match.params.requestId}/submit`}
                      buttonText = "BCを選択する"
                      colorBg = "#F44336"
                      />
                  )
                } else if(props.events.is_selected_bc === false){
                  return (
                    <ButtonComponent
                      link = {`/proposal/${this.props.match.params.requestId}/submit`}
                      buttonText = "提案する"
                      colorBg = "#ff9800"
                      />
                  )
                }
              })()
            }

            <h3>{requestState.r_limit}まで</h3>
            <h2>みんなの提案したコーディネート</h2>

            <ProposalCard
              requestId = {this.props.match.params.requestId}
              />

            {
              (() => {
                if (props.events.is_selected_bc === false &&
                  props.events.r_u_id === userState.id) {
                    return (
                      <ButtonComponent
                        link = {`/selectBc/${this.props.match.params.requestId}/submit`}
                        buttonText = "BCを選択する"
                        colorBg = "#F44336"
                        />
                    )
                  } else if(props.events.is_selected_bc === false){
                    return (
                      <ButtonComponent
                        link = {`/proposal/${this.props.match.params.requestId}/submit`}
                        buttonText = "提案する"
                        colorBg = "#ff9800"
                        />
                    )
                  }
                })()
              }


          </div>
        );
      }
    }

    const mapStateToProps = state => ({ events: state.events })
    const mapDispatchToProps = ({ readRequestDetails })

    export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
