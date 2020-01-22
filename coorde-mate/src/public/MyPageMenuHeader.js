import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../css/myPageMenuHeader.css'

//マイページメニューヘッダー
class MyPageMenuHeader extends React.Component {
  render() {
    return (
      <div className="mypageMenu">
        <Link to={`/myPage/accountStatus`} >アカウント変更</Link>
        <Link to={`/myPage/closet`}>服一覧</Link>
        <a href="../static/news.html" target="_blank">お知らせ</a>
        <a href="../static/terms.html" target="_blank">利用規約</a>
      


        <Link to={`/logout`}>ログアウト</Link>
    </div>
    );
  }
}

export default MyPageMenuHeader;
