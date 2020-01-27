import React from 'react';
import axios from 'axios';

import '../css/myPageAccountStatus.css';
import ButtonComponent from '../public/ButtonComponent.js'

class MyPageAccountStatus extends React.Component {
  constructor(){
    super();
    this.state = {
      userDatas:[]
    }
  }

  render() {
    const userIdStatus = JSON.parse(localStorage.getItem('userData'))
    console.log('aaaaa');
    console.log(userIdStatus.id);
    return (
      <div className="myPageContainer">
        <div className="userInfo">
          <div className="icon">
            <img src={userIdStatus.u_icon} alt={userIdStatus.u_name} />
          </div>
          <div className="userName">
            <h2 style={{fontSize:'5.0rem', textAlign:'center'}}>{userIdStatus.u_name}</h2>
          </div>
        </div>
        <div className="mailAddress">
          <p>メールアドレス:{userIdStatus.u_mail}</p>
        </div>
          <div>
            <ButtonComponent
              buttonText = "アカウント情報を変更する"
              link = {`/myPage/accountChange`}
            />
          </div>
      </div>
    )
  }
}


export default MyPageAccountStatus;