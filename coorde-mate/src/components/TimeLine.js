import React from 'react';

import '../css/timeLine.css';

import img from '../img/iconSample.jpg';

class TimeLine extends React.Component {
  /*
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }
  */

  render() {
    return (
      <a href="#" className="container">
        <div className="requestCard">
          <div className="icon">
            <img src={img} alt="default icon" />
          </div>
          <div className="requestText right">
            <div className="requestTitle">
              <h2>依頼タイトル</h2>
            </div>
            <div className="requestMemo">
              <p>依頼メモを表示する。あああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
            <div className="requestLimit">
              <p>xx年xx月xx日xx時xx分まで</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default TimeLine;
