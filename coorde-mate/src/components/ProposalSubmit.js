import React from 'react';

//css
import '../css/proposalDetails.css';

//提案詳細画面
class ProposalSubmit extends React.Component {
  render() {
    return (
      <div>
        <div className="memo">
          <textarea rows="10"  placeholder="メモを入力"></textarea>
        </div>

        <div className="button-wrapper">
          <button type="submit">提案する</button>
        </div>
      </div>
    );
  }
}

export default ProposalSubmit;
