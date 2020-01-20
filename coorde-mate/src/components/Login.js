import React from 'react';


//ログイン画面
class Login extends React.Component {


  render() {
    return (























      <div className="login-wrapper">
      <h3 className="theme">今日のあなたをデザインする</h3>
      <h1 className="logo">コーデメイト</h1>

      <div className="loginForm">
        <div className="mailAddress">
          <input type="text" placeholder="メールアドレス" size="40" />
        </div>

        <div className="password">
          <input type="text" placeholder="パスワード" size="40" />
        </div>

        <div>
          <button className="loginButton" type="submit">ログイン</button>
        </div>

        <div>
          <button className="signUpButton" type="submit">新規登録</button>
        </div>

      </div>
    </div>
    );
  }
}

export default Login;
