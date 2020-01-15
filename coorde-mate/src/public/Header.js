import React from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';

import img from '../img/iconSample.jpg';

class Header extends React.Component {
  render() {
    return(
      <header>
        <ul>
          <Link to={`/`}>タイムライン</Link>
          <Link to={`/pastTimeLine`}>過去タイムライン</Link>
          {/*<Link to={`/ranking`}>ランキング</Link>*/}
          {/*<Link to={`/userHistory/:userId`}>依頼・投稿履歴</Link>*/}

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
