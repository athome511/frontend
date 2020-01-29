import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../css/myPageMenuHeader.css'

//マイページメニューヘッダー
class MyPageMenuHeader extends React.Component {
  render() {
    return (
      <div className="mypageMenu">
          <Link to={`/myPage/accountStatus`}><p>アカウント変更</p></Link>
          <Link to={`/myPage/closet`}><p>服一覧</p></Link>
          <a href="../static/news.html" target="_blank"><p>お知らせ</p></a>
          <a href="../static/terms.html" target="_blank"><p>利用規約</p></a>
          <Link to={`/logout`}><p>ログアウト</p></Link>
    </div>
    );
  }
}

export default MyPageMenuHeader;
