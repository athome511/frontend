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
              <ul className="headerList">
                <li><Link to={`/timeLine`}><p>タイムライン</p></Link></li>
                <li><Link to={`/pastTimeLine`}><p>過去タイムライン</p></Link></li>
                <li><Link to={`/ranking`}><p>ランキング</p></Link></li>
                <li><Link to={`/userHistory/requests/${headerState.id}`}><p>依頼・投稿履歴</p></Link></li>
                <li style={{float:'right'}}><Link to={`/myPage/accountStatus`}><p><img src={headerState.u_icon} alt={`User Icon : ${headerState.u_name}`} />マイページ</p></Link></li>
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
