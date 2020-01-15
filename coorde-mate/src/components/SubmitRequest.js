import React from 'react';

import ButtonComponent from '../public/ButtonComponent';

//css
import '../css/submitRequest.css';

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


      <ButtonComponent
        link = {`/completed`}
        buttonText = "依頼を投稿する"
      />

    </div>
    );
  }
}

export default SubmitRequest;
