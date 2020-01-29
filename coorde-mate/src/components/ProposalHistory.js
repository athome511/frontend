import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { connect  } from 'react-redux';
import { readUserProposals } from '../actions';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//import ButtonComponent from '../public/ButtonComponent';
import RequestCard from './RequestCard';


class ProposalHistory extends React.Component {
  componentDidMount() {
    const userState = JSON.parse(localStorage.getItem('userData'))

    this.props.readUserProposals(userState.id)
  }
  /* 提案した依頼表示 */
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
        <h1>提案履歴</h1>

          <ButtonGroup color="primary" aria-label="outlined primary button group" style={{width: '50%'}}>
            <Button><Link to={`/userHistory/requests/${userState.id}`} >依頼履歴</Link></Button>

            <Button disabled style={{backgroundColor: '#ff9800'}}><Link disabled to={`/userHistory/proposals/${userState.id}`} >提案履歴</Link></Button>
          </ButtonGroup>


          {this.renderEvents()}

        </div>
      );
    }
  }

  const mapStateToProps = state => ({ events: state.events })
  const mapDispatchToProps = ({ readUserProposals })

  export default connect(mapStateToProps, mapDispatchToProps)(ProposalHistory);
  //export default ProposalHistory;
