import React from 'react';
import axios from 'axios';
import FileInputComponent from 'react-file-input-previews-base64';

//import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import '../css/clothsTile.css';




class MyPageCloset extends React.Component {

    constructor(){
	super();
	this.state = {
	    cloth: '',
	    flag: true
	}
    }

    hundleSubmit = () => {
	const userState = JSON.parse(localStorage.getItem('userData'))
	this.createCloth(userState.id, this.state.cloth)
	this.setState({cloth:''})
    }

    createCloth = (id,cloth) => {
	axios.post(`http://18.178.35.28:3001/cloths`,{c_u_id: id, c_link: cloth})
	    .then((response) => {
		console.log(response)
	    }
		 )
    }


  componentWillMount() {
    const userState = JSON.parse(localStorage.getItem('userData'))

    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })
    request.get(`/cloths/${userState.id}`)
    .then(res => {
      localStorage.setItem('clothsData', JSON.stringify(res.data))
    })

  }


    render() {
	const clothsState = JSON.parse(localStorage.getItem('clothsData'))

    return (
	    <React.Fragment>
        <div className="root">
          <GridList cellHeight={200} className="gridList">
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
            </GridListTile>

            {/* 所有服一覧表示 */}
            {clothsState.c_link_data.map((cloth) => {
              return (
                <GridListTile key={cloth.id}  style={{width: 'auto', height: 150, background: '#E1E8ED', padding: 5, borderRadius: 3, marginLeft: 10,marginBottom: 10}}>
                  <img src={cloth.c_link} alt={`服画像id : ${cloth.c_u_id}`} />
                </GridListTile>
              )
            })
	    }

          </GridList>
            </div>
	    <div className="changeIcon">
	    <div>
	    <FileInputComponent
              labelText = "cloth"
              parentStyle={{}} //スタイル
              imagePreview={true} //ファイルのプレビュー
              multiple={false} //複数ファイル選択
              callbackFunction={file => { //選択後のコールバック関数
              console.log(file)
              this.setState({cloth: file.base64})
            }}
            buttonComponent={ //クリック時に選択ダイアログを開くコンポーネント
              <button type="chooseIcon">ファイルを選択</button>
            }
            accept="image/*" //許可するファイルのtype
            />
	    </div>
	    <button type="submit" onClick={() => {this.hundleSubmit()}}>追加</button>
	    </div>

      </React.Fragment>
    );
  }
}

export default MyPageCloset;
