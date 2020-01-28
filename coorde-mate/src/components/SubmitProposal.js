import React from 'react';
import axios from 'axios';

import ButtonComponent from '../public/ButtonComponent';

//css
import '../css/submitProposal.css';

//提案入力画面
class SubmitProposal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
      userId: 0
    }
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/proposals/${this.props.match.params.requestId}`)
    .then(res => {
      this.setState({ userId: res.data.id })
    })

    request.get(`/users/${this.state.userId}`)
    .then(res => {
      this.setState({ datas: res.data })
    })
  }



  render() {
    return (
      <div>
        <div className="memo">
          <textarea rows="10"  placeholder="メモを入力"></textarea>
        </div>


        <ButtonComponent
          link = {`/completed`}
          buttonText = "提案を決定する"
        />
      </div>
    );
  }
}

export default SubmitProposal;
