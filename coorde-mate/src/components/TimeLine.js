import React from 'react';
//import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readRequests } from '../actions';

/* myComponents */
import RequestCard from './RequestCard';
import ButtonComponent from '../public/ButtonComponent';



class TimeLine extends React.Component {
  
  componentDidMount() {
    this.props.readRequests()
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
            requestId = {requestData.id}
            title = {requestData.r_title}
            limit = {requestData.r_limit}
            memo = {requestData.r_memo}
            userId = {requestData.r_u_id}
            />
        </Link>
      ))
    )
  }

  render() {
    return (
      <div>
        <ButtonComponent
          link = {`/requestSubmit`}
          buttonText = "依頼を投稿する"
        />

      {this.renderEvents()}

    </div>
  )
}
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readRequests })

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
