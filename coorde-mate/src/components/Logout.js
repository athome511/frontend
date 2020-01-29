import React from 'react';

import ButtonComponent from '../public/ButtonComponent';


class Logout extends React.Component {

  render() {
    localStorage.clear()
    return (
      <div>
        LogOutしました
        <ButtonComponent
          link = {`/`}
          buttonText = "ログイン画面へ"
        />
      </div>
    );
  }
}

export default Logout;
