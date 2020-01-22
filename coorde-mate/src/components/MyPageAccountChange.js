import React from 'react';
import axios from 'axios';

//import '../css/myPageAccountChange.css';
import ButtonComponent from '../public/ButtonComponent.js';

class MyPageAccountChange extends React.Component {

  constructor(){
    super();
    this.state = {
      userDatas:[]
    }
  }

  render() {
    const userIdStatus = JSON.parse(localStorage.getItem('userData'))
    return (
      <div className="myPageContainer">
        <div className="changeIcon">
          <img src={userIdStatus.u_icon} alt={userIdStatus.u_name} className="icon" />
          <div>
            <ButtonComponent
              buttonText = "アイコンを変更する"
            />
          </div>
        </div>
        <div className="changeStatus">
          <input value={this.state.u_name} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default MyPageAccountChange;
