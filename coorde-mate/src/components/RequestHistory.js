import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readUserRequests } from '../actions';

import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';

class RequestHistory extends React.Component {

  componentDidMount() {
    this.props.readUserRequests(this.props.match.params.userId)
  }

  /* タイムライン表示 */
  renderEvents() {
    return (
      _.map(this.props.events, requestData => (
        <Link to={`/request/${requestData.id}`}
          key={requestData.id}
          className="container"
          >
          <RequestCard
            key = {requestData.id}
            title = {requestData.r_title}
            limit = {requestData.r_limit}
            memo = {requestData.r_memo}
            userId = {requestData.r_u_id}
            bcSelected = {requestData.is_selected_bc}
            borderStyle = {"block"}
            />
        </Link>
      ))
    )
  }


  render() {
    const userState = JSON.parse(localStorage.getItem('userData'))

    return (
      <div>
        <h1>依頼履歴</h1>
        <ButtonComponent
          link = {`/userHistory/requests/${userState.id}`}
          buttonText = "依頼履歴"
        />
        <ButtonComponent
          link = {`/userHistory/proposals/${userState.id}`}
          buttonText = "提案履歴"
        />

        {this.renderEvents()}



      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readUserRequests })

export default connect(mapStateToProps, mapDispatchToProps)(RequestHistory);
//export default RequestHistory;
