import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../css/myPageMenuHeader.css'

//マイページメニューヘッダー
class MyPageMenuHeader extends React.Component {
  render() {
    return (
      <div className="mypageMenu">
        <Link to={`/myPage/accountStatus`} style={{color:'white'}}>アカウント変更</Link>
        <Link to={`/myPage/closet`} style={{color:'white'}}>服一覧</Link>

        <a href="../static/news.html" target="_blank" style={{color:'white'}}>お知らせ</a>
        <a href="../static/terms.html" target="_blank" style={{color:'white'}}>利用規約</a>
        <Link to={`/logout`} style={{color:'white'}}>ログアウト</Link>
    </div>
    );
  }
}

export default MyPageMenuHeader;
