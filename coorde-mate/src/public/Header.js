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
                <Link to={`/timeLine`}>タイムライン</Link>
                <Link to={`/pastTimeLine`}>過去タイムライン</Link>
                <Link to={`/ranking`}>ランキング</Link>
                <Link to={`/history/requests/${headerState.id}`}>依頼・投稿履歴</Link>

                <Link to={`/myPage`}><img src={headerState.u_icon} alt={`User Icon : ${headerState.u_name}`} />マイページ</Link>
              </header>
            )
          }
        })()}

      </div>

    );
  }
}


export default Header;
