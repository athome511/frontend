import React from 'react';

//css
import './css/myPageMenuHeader.css'

//マイページメニューヘッダー
class MyPageMenuHeader extends React.Component {
  render() {
    return (
      <div className="mypageMenu-wrapper">
        <ul>
          <li><a>アカウント変更</a></li>
          <li><a>服一覧</a></li>
          <li><a>お知らせ</a></li>
          <li><a>利用規約</a></li>
          <li><a>ログアウト</a></li>
        </ul>
    </div>
    );
  }
}

export default MyPageMenuHeader;
