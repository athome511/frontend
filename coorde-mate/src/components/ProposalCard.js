import React from 'react';
import axios from 'axios';

class ProposalCard extends React.Component {
  constructor(){
    super();
    this.state = {
      proposalDatas: []
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    //request.get(`/proposal/${this.props.requestId}`)
    request.get(`/proposals/1`)
    .then(res => {
      this.setState({ proposalDatas: res.data })
    })
  }


  render() {
    return (
      <div>
        {this.state.proposalDatas.map((proposalData) => {
          return (
            <div>
            <p>提案メモ</p>
              {/*
                {<ProposalClothTile
                  clothLink = {proposalData.ここにリンク}
                />}
                */}
              <p>{proposalData.p_memo}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ProposalCard;
