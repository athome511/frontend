import React from 'react';
import axios from 'axios';

//import { connect  } from 'react-redux';
//import { readProposals } from '../actions';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import Loading from '../public/Loading';



class ProposalCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      proposalDatas:[],
    }
  }


  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/proposals/${this.props.requestId}`)
    .then(res => {
      this.setState({ proposalDatas: res.data })
    })

  }


  bcLabel(p_bc) {
    if(p_bc !== null){
        return(
          <div className="bcLabel-content">
            <div className="bcLabel">BC</div>
          </div>
        )
    }
  }


  render() {
    return (
      <React.Fragment>
        {this.state.proposalDatas.map((cloth) => {
          if(cloth.id) {
            return (
              <div className="root shadowStyle">
                <GridList cellHeight={200} className="gridList">
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>提案服一覧</ListSubheader>
                  </GridListTile>

                  {/* 提案服一覧表示 */}
                  {cloth.p_selected_data.map((cloth) => {
                    return (
                      <GridListTile key={cloth.id} style={{width: 'auto', height: 150, background: '#E1E8ED', padding: 5, borderRadius: 3, marginLeft: 10}}>
                        <img src={cloth.link} alt={`服画像id : ${cloth.id}`} />
                      </GridListTile>
                    )
                  })}


                  <p>memo: {cloth.p_memo}</p>

                  {this.bcLabel(cloth.p_bc)}

                </GridList>
              </div>
            )
          } else return <Loading />
          })}

        </React.Fragment>
      );
    }
  }
export default ProposalCard;
