import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'
import FileInputComponent from 'react-file-input-previews-base64'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      icon: ''
    }
  }

  onChangetext(e) {
    this.setState({name: e.target.value})
  }

  hundleSubmit = () => {
    this.props.createUser(this.state.name,this.state.icon)
    this.setState({name:''})
    this.setState({icon:''})
  }


  render(){
    return(
      <div>
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            onChange={ e => this.onChangetext(e)}
          />
        </FormGroup>

      </form>
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
	  <Button type="chooseIcon">ファイルを選択</Button>
	}
	accept="image/*" //許可するファイルのtype
      />
      <Button type="submit" onClick={this.hundleSubmit}>アカウント登録</Button>
      </div>
    )
  }
}

export default FormContainer
