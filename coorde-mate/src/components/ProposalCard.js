import React from 'react';
import axios from 'axios';
import _ from 'lodash';

//import { connect  } from 'react-redux';
//import { readProposals } from '../actions';

import Loading from '../public/Loading';

class ProposalCard extends React.Component {

  /*
  componentWillMount(){
  const request = axios.create({
  baseURL: 'http://18.178.35.28:3001'
  })

  //request.get(`/proposal/${this.props.requestId}`)
  request.get(`/proposals/1`)
  .then(res => {
  this.setState({ proposalDatas: res.data })
  })
  }
  */


  /*
  componentDidMount() {
  this.props.readProposals(this.requestIdState)
  }*/
  /*
  renderProposals(requestId) {
  this.props.readProposals(requestId)

  return (
  _.map(this.props.events, proposalData => (
  <div>
  <p>提案メモ</p>
  <p>{proposalData.p_memo}</p>
  <p>提案服一覧</p>
  <div>{this.renderSelectSloths(proposalData.p_pc_text)}</div>
  <p>{proposalData.p_pc_text}</p>

  ---------------------------------
  </div>
  ))
  )
  }*/

  renderSelectSloths(selectCloths) {
    /*const ary = selectCloths.split('_')
    ary.map(function(v) {
    return parseInt(v)
    })

    ary.map((cloths) => {
    return (
    <React.Fragment>
    <img src={cloths} />
    </React.Fragment>
    )
    })*/

  }
  /*
  componentWillMount() {
  const requestIdState = localStorage.getItem('requestId')
  }
  */
  render() {
    /*if(this.state.flag == 0) {
      const requestIdState = localStorage.getItem('requestId')
      this.setState = { flag: 1 }
    }*/


    return (
      <div>
        {/*this.renderProposals(this.requestIdState)*/}



        {/*
          {this.state.proposalDatas.map((proposalData) => {
          return (
          <div>
          <p>提案メモ</p>
          {<ProposalClothTile
          clothLink = {proposalData.ここにリンク}
          />}
          <p>{proposalData.p_memo}</p>
          </div>
          )
          })}*/}
        </div>
      );
    }
  }

/*
const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readProposals })

export default connect(mapStateToProps, mapDispatchToProps)(ProposalCard);
*/
export default ProposalCard;
