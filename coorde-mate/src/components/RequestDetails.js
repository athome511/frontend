import React from 'react';
import axios from 'axios';
import ClothsTile from './ClothsTile';


//依頼詳細画面
class RequestDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      requestDatas: [],
      userDatas: []
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    //this.props.match.params.requestId でURLを取得してる
    //依頼情報の取得
    request.get(`/requests/${this.props.match.params.requestId}`)
    .then(res => {
      this.setState({ requestDatas: res.data })
      this.setUser(request, this.state.requestDatas.r_u_id)
    })
  }

  setUser(request, userId) {
    request.get(`users/${userId}`)
    .then(res => {
      this.setState({ userDatas : res.data})
    })
  }





  render() {
    return (
      <div>
        <h1>依頼詳細</h1>
        <p>userName : {this.state.userDatas.u_name}</p>
        <p>requestTitle : {this.state.requestDatas.r_title}</p>

        <div className="container">
          <ClothsTile
            userId = "3"
          />
        </div>
      </div>
    );
  }
}
export default RequestDetails;
