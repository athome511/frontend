import React from 'react';
import axios from 'axios';

import '../css/myPageAccountStatus.css';

class MyPageAccountStatus extends React.Component {
  constructor(){
    super();
    this.state = {
      userDatas:[]
    }
  }

  render() {
    const userIdStatus = JSON.parse(localStorage.getItem('userData'))
    return (
      <div className="icon">
          <img src={userIdStatus.u_icon} alt={userIdStatus.u_name}/>
      </div>
      <div className="mailAddress">
      </div>
    )
  }
}

export default MyPageAccountStatus;
