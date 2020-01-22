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
                <li><Link to={`/timeLine`}><a>タイムライン</a></Link></li>
                <li><Link to={`/pastTimeLine`}><a>過去タイムライン</a></Link></li>
                <li><Link to={`/ranking`}><a>ランキング</a></Link></li>
                <li><Link to={`/userHistory/${headerState.id}`}><a>依頼・投稿履歴</a></Link></li>
                <li><Link to={`/myPage/status`}><img src={headerState.u_icon} alt={`User Icon : ${headerState.u_name}`} /><a>マイページ</a></Link></li>
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
