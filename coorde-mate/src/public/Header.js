import React from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';

import img from '../img/iconSample.jpg';

class Header extends React.Component {
  render() {
    //ログインユーザ情報取得
    const headerState = JSON.parse(localStorage.getItem('userData'))
    return(
      <div>
        {(() => {
          if(!headerState) {
            return <div className="topBar"></div>
          } else if (headerState.id) {
            return (
              <header>
              <ul>
                <li><Link to={`/timeLine`}>タイムライン</Link></li>
                <li><Link to={`/pastTimeLine`}>過去タイムライン</Link></li>
                <li><Link to={`/ranking`}>ランキング</Link></li>
                <li><Link to={`/userHistory/requests/${headerState.id}`}>依頼・投稿履歴</Link></li>
                <li style={{float:'right'}}><Link to={`/myPage/accountStatus`}><img src={headerState.u_icon} alt={`User Icon : ${headerState.u_name}`} />マイページ</Link></li>
              </ul>
              </header>
            )
          }
        })()}

      </div>

    );
  }
}


export default Header;
