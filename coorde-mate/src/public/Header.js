import React from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';

import img from '../img/iconSample.jpg';

class Header extends React.Component {
  render() {
    //ログインユーザ情報取得
    const headerState = JSON.parse(localStorage.getItem('userData'))
    return(
      <header>
        {/*
          <Link to={`/timeLine`}>タイムライン</Link>
          <Link to={`/pastTimeLine`}>過去タイムライン</Link>
          <Link to={`/ranking`}>ランキング</Link>
          <Link to={`/userHistory/${headerState.id}`}>依頼・投稿履歴</Link>

          <Link to={`/myPage`}><img src={headerState.u_icon} alt={`User Icon : ${headerState.u_name}`} />マイページ</Link>
          */}

          <Link to={`/timeLine`}>タイムライン</Link>
          <Link to={`/pastTimeLine`}>過去タイムライン</Link>
          <Link to={`/ranking`}>ランキング</Link>
          <Link to={`/userHistory/:id`}>依頼・投稿履歴</Link>

        </header>
      );
    }
  }


  export default Header;
