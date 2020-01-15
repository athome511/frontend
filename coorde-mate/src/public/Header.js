import React from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';

import img from '../img/iconSample.jpg';

class Header extends React.Component {
  render() {
    return(
      <header>
          <Link to={`/`}>タイムライン</Link>
          <Link to={`/pastTimeLine`}>過去タイムライン</Link>
          <Link to={`/ranking`}>ランキング</Link>
          <Link to={`/userHistory/:userId`}>依頼・投稿履歴</Link>

          <Link to={`/myPage`}><img src={img}/>マイページ</Link>

        </header>
      );
    }
  }


  export default Header;
