import React from 'react';

//完了ページ
class Completed extends React.Component {
  render() {
    return (
      <div className="finish-wrapper">
        <div className="text">xxxが完了しました</div>
        <div className="button-wrapper">
          <button className="submitButton" type="submit" a href="#">タイムラインに戻る</button>
        </div>
      </div>
    );
  }
}

export default Completed;
