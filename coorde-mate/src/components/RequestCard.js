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

    request.get(`/users/${this.props.userId}`)
    .then(res => {
      this.setState({
        userDatas: res.data
      });
    })
  }


  render() {
    return (

        <div className="requestCard">
          <div className="icon">
            <img src={this.state.userDatas.u_icon} alt={this.state.userDatas.u_name} />
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




          {/* 依頼詳細画面へのリンク */}
          {/*<Link to={`/request/${this.props.requestId}`}
             key={this.props.requestId}
             className="container"
          >

            <div className="icon">
              <img src={this.state.userDatas.u_icon} alt={this.state.userDatas.u_name} />
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
          </Link>*/}
        </div>


    );
  }
}


export default RequestCard;