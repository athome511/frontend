import React from 'react';

import ButtonComponent from '../public/ButtonComponent';


class ProposalHistory extends React.Component {
  render() {
    const userState = JSON.parse(localStorage.getItem('userData'))
    return (
      <div>
        <h1>提案履歴</h1>
        <ButtonComponent
          link = {`/history/requests/${userState.id}`}
          buttonText = "依頼履歴"
        />
        <ButtonComponent
          link = {`/history/proposals/${userState.id}`}
          buttonText = "提案履歴"
        />
      </div>
    );
  }
}

export default ProposalHistory;
