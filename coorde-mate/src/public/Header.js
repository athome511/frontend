import React from 'react';

import '../css/header.css';

import img from '../img/iconSample.jpg';

class Header extends React.Component {
  render() {
    return(
      <header>
        <ul>
          <li><a href="#">タイムライン</a></li>
          <li><a href="#">過去タイムライン</a></li>
          <li><a href="#">ランキング</a></li>
          <li><a href="#">依頼・投稿履歴</a></li>
          <li className="right"><a href="#">
            <img src={img} />
              マイページ
            </a></li>
          </ul>
        </header>
      );
    }
  }


  export default Header;
