import React from 'react';

//css
import '../css/SubmitRequest.css';

//依頼投稿ページ
class SubmitRequest extends React.Component {
  render() {
    return (
      <div className="postRequest-wrapper">
        <div className="postRequest-form" id="title" >
          <input type="text" placeholder="タイトルを入力" size="40" />
        </div>
      <div className="postRequest-form" id="limit">
        <input type="text" placeholder="期限を入力" size="40" />
      </div>

      <div className="postRequest-form" id="memo">
        <textarea rows="5" cols="40" placeholder="メモを入力" ></textarea>
      </div>

      <div className="button-wrapper">
        <button id="submitButton" type="submit">依頼を提案する</button>
      </div>

    </div>
    );
  }
}

export default SubmitRequest;
