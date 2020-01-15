import React from 'react';

import ButtonComponent from '../public/ButtonComponent';

//完了ページ
class Completed extends React.Component {
  render() {
    return (
      <div className="finish-wrapper">
        <div className="text">xxxが完了しました</div>


          <ButtonComponent
            link = {`/`}
            buttonText = "タイムラインに戻る"
          />
      </div>
    );
  }
}

export default Completed;
