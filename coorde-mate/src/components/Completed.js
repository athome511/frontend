import React from 'react';

import ButtonComponent from '../public/ButtonComponent';

//完了ページ
class Completed extends React.Component {
  render() {
    return (
      <div className="finish-wrapper">
        <div className="text">完了しました</div>


          <ButtonComponent
            link = {`/timeLine`}
            buttonText = "タイムラインに戻る"
            colorBg = "#ff9800"
          />
      </div>
    );
  }
}

export default Completed;
