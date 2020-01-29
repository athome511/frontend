import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readPastRequests } from '../actions';

/* myComponents */
import RequestCard from './RequestCard';



class PastTimeLine extends React.Component {

  componentDidMount() {
    this.props.readPastRequests()
  }

/* 過去タイムライン表示 */
renderEvents() {
  return (
    _.map(this.props.events, requestData => (
      <Link to={`/request/${requestData.id}`}
        key={requestData.id}
        className="container"
        >
        <RequestCard
          key = {requestData.id}
          userId = {requestData.r_u_id}
          title = {requestData.r_title}
          memo = {requestData.r_memo}
          borderStyle = {"block"}
          />
      </Link>
    ))
  )
}

  render() {
    return (
      <React.Fragment>
      {this.renderEvents()}
    </React.Fragment>

    );
  }
}


const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readPastRequests })

export default connect(mapStateToProps, mapDispatchToProps)(PastTimeLine);
//export default PastTimeLine;
