import React from 'react';
import axios from 'axios';



//依頼詳細者コンポーネント
class RequestDetailsUser extends React.Component {
  constructor(){
    super();
    this.state = {
      datas: []
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/users/${this.props.userId}`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }

  render() {
    return (
      <div>
        <p>userName : {this.state.datas.u_name} </p>
      </div>
    )
  }
}

export default RequestDetailsUser;
