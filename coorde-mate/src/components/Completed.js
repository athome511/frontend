import React from 'react';

import ButtonComponent from '../public/ButtonComponent';

//完了ページ
class Completed extends React.Component {
  render() {
    return (
      <div className="finish-wrapper" style={{textAlign: 'center', marginTop: 250}}>
        <h1>完了しました</h1>


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
