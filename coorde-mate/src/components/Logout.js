import React from 'react';
import { Link } from 'react-router-dom';


class Logout extends React.Component {

  render() {
    localStorage.clear()
    return (
      <div>
        LogOutしました
        <Link to={'/'}>ログイン画面へ</Link>
      </div>
    );
  }
}

export default Logout;
