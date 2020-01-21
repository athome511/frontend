import React from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readRequestDetails } from '../actions';

//myComponent
import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';
import ClothsTile from './ClothsTile';
import ProposalCard from './ProposalCard';


//依頼詳細画面
class RequestDetails extends React.Component {

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
            <Link to={`/request/${props.events.id}/cloths`} />

            
            <ClothsTile
              userId = {props.events.r_u_id}
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
