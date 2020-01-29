import React from 'react';
import axios from 'axios';

import '../css/myPageDefault.css'

class MyPageDefault extends React.Component {
  constructor(){
    super();
    this.state = {
      userDatas:[]
    }
  }

/*
  componentDidMount(){
    const userIdStatus = localStorage.getItem('userData')
    console.log()
    console.log(userIdStatus.)
    const request = axios.create({
     baseURL: 'http://18.178.35.28:3001'
    })


    request.get(`/users/${this.userIdStatus}`)
    .then(res => {
      this.setState({
        userDatas: res.data
      });
    })
  }
*/

  render() {
    const userIdStatus = JSON.parse(localStorage.getItem('userData'))
    console.log('aaaaa');
    console.log(userIdStatus.id);
    return (
      <div className="myPageDefault">
        <div className="userInfo">
          <div className="icon">
            <img src={userIdStatus.u_icon} alt={userIdStatus.u_name} />
          </div>
          <div className="userName">
            <h2 style={{fontSize:'5.0rem', textAlign:'center'}}>{userIdStatus.u_name}</h2>
          </div>
        </div>
        <div className="userStatus">
          <ul>
            <li>メールアドレス:{userIdStatus.u_mail}</li>
            <li>今月のBC獲得数:{userIdStatus.u_month_bc}</li>
            <li>累計BC獲得数:{userIdStatus.u_total_bc}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MyPageDefault;
