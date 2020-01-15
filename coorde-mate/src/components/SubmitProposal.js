import React from 'react';

import ButtonComponent from '../public/ButtonComponent';

//css
import '../css/submitProposal.css';

//提案入力画面
class SubmitProposal extends React.Component {
  render() {
    return (
      <div>
        <div className="memo">
          <textarea rows="10"  placeholder="メモを入力"></textarea>
        </div>


        <ButtonComponent
          link = {`/completed`}
          buttonText = "提案を決定する"
        />
      </div>
    );
  }
}

export default SubmitProposal;
