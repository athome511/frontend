import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readUserRequests } from '../actions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
          <ButtonGroup color="primary" aria-label="outlined primary button group" style={{width: '50%'}}>
            <Button disabled
              style={{backgroundColor: '#ff9800'}}><Link disabled to={`/userHistory/requests/${userState.id}`} >依頼履歴</Link></Button>

            <Button><Link to={`/userHistory/proposals/${userState.id}`} >提案履歴</Link></Button>
          </ButtonGroup>

        {this.renderEvents()}



      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readUserRequests })

export default connect(mapStateToProps, mapDispatchToProps)(RequestHistory);
//export default RequestHistory;
