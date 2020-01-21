import React from 'react';
import axios from 'axios';

//css
import '../css/requestCard.css';

class RequestCard extends React.Component {
  constructor(){
    super();
    this.state = {
      userDatas:[]
    }
  }



  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    if(this.props.userId !== undefined) {
      request.get(`/users/${this.props.userId}`)
      .then(res => {
        this.setState({
          userDatas: res.data
        });
      })
    }
  }


  render() {
    const style = { border: this.props.borderStyle }

    return (

        <div className="requestCard" style={style} >
          <div className="icon">
            <img src={this.state.userDatas.u_icon} alt={`UserIcon : ${this.state.userDatas.u_name}`} />
          </div>

          <div className="requestText right">
            <div className="requestTitle">
              <h2>{this.props.title}</h2>
            </div>
            <div className="requestMemo">
              <p>{this.props.memo}</p>
            </div>
            <div className="requestLimit">
              <p>{this.props.limit}</p>
            </div>
          </div>


        </div>


    );
  }
}

export default RequestCard;
