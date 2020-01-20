import React from 'react';

//css
import '../css/requestCard.css';

class RequestDetailsCard extends React.Component {

  componentDidMount() {
    console.log(this.props.userId)
  }

  render() {
    return (

        <div className="requestCard" style={{border: 'none'}}>
          <div className="icon">
            <img src={this.props.userIcon} alt={this.props.userName} />
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


export default RequestDetailsCard;
