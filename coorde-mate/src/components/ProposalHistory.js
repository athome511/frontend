import React from 'react';

import ButtonComponent from '../public/ButtonComponent';


class ProposalHistory extends React.Component {
  render() {
    const userState = JSON.parse(localStorage.getItem('userData'))
    return (
      <div>
        <h1>提案履歴</h1>
        <ButtonComponent
          link = {`/userHistory/requests/${userState.id}`}
          buttonText = "依頼履歴"
        />
        <ButtonComponent
          link = {`/userHistory/proposals/${userState.id}`}
          buttonText = "提案履歴"
        />
      </div>
    );
  }
}

export default ProposalHistory;
