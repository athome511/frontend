import React from 'react';
import axios from 'axios';
import FileInputComponent from 'react-file-input-previews-base64';
import TextField from '@material-ui/core/TextField';

//import '../css/myPageAccountChange.css';
import ButtonComponent from '../public/ButtonComponent.js';

class MyPageAccountChange extends React.Component {

  constructor(){
    super();
    this.state = {
      userDatas:[],
      name: '',
      icon: ''
    }
  }

  changeUser = (id,name,icon) => {
    axios.patch(`http://18.178.35.28:3001/users/${id}`,{u_name: name, u_icon: icon})
    .then((response) => {
      console.log(response)
    })
  }

  hundleSubmit = () => {
    const userStatus = JSON.parse(localStorage.getItem('userData'))
    this.changeUser(userStatus.id, this.state.name, this.state.icon)
    this.setState({name:''})
    this.setState({icon:''})
  }

  onChangetext(e) {
    this.setState({name: e.target.value})
  }


  render() {
    const userIdStatus = JSON.parse(localStorage.getItem('userData'))
    return (
      <div className="myPageContainer">
        <div className="changeIcon">
          <img src={userIdStatus.u_icon} alt={userIdStatus.u_name} className="icon" />
          <div>
            <FileInputComponent
              labelText = "icon"
              parentStyle={{}} //スタイル
              imagePreview={true} //ファイルのプレビュー
              multiple={false} //複数ファイル選択
              callbackFunction={file => { //選択後のコールバック関数
                console.log(file)
                this.setState({icon: file.base64})
              }}
              buttonComponent={ //クリック時に選択ダイアログを開くコンポーネント
                <button type="chooseIcon">ファイルを選択</button>
              }
              accept="image/*" //許可するファイルのtype
              />
          </div>
        </div>
        <div className="changeName">
          <TextField className="standard-basic" name="name" label="ニックネーム" value={this.state.name} onChange={e => this.onChangetext(e)} />
        </div>
        <button type="submit" onClick={() => {this.hundleSubmit()}}>変更</button>
      </div>
    );
  }
}

export default MyPageAccountChange;
