import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


//ログイン画面
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: [],
      mail: '',
      password: ''
    } // stateのkey名とフォームのname属性を一致させる
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let name = e.target.name; // フォームのname属性を取得
    this.setState({ [name]: e.target.value }) // name属性 = stateのkey名なのでstateに保存
  }

  check() {
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/login/${this.state.mail}`)
    .then(res => {
      console.log(this.state.mail)
      if(res.data.u_mail === this.state.mail && res.data.u_password === this.state.password) {
        localStorage.setItem('userData', JSON.stringify(res.data))
        this.props.history.push('/timeLine')
      }

    })
  }


  render() {

    return (
      <div>
        <p>titleの値：{this.state.mail}</p>
        <p>textの値：{this.state.password}</p>

      <TextField className="standard-basic"　name="mail" label="メールアドレス"　value={this.state.mail} onChange={this.handleChange} />

    <TextField className="standard-basic"　name="password" label="パスワード" type="password" onChange={this.handleChange} />

        {/*<input name="mail" value={this.state.mail} onChange={this.handleChange} />

        <input name="password" type="password" onChange={this.handleChange} />*/}

        <button onClick={() => {this.check()}}>ログイン</button>
      </div>
    )
  }
}




export default Login;
