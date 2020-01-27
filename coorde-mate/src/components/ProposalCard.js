import React from 'react';
import axios from 'axios';
import _ from 'lodash';

//import { connect  } from 'react-redux';
//import { readProposals } from '../actions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

//import Loading from '../public/Loading';

class ProposalCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      proposalDatas:[]
    }
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



  /*
  componentDidMount() {
  this.props.readProposals(this.requestIdState)
  }*/
  /*
  renderProposals(requestId) {
  this.props.readProposals(requestId)

  return (
  _.map(this.props.events, proposalData => (
  <div>
  <p>提案メモ</p>
  <p>{proposalData.p_memo}</p>
  <p>提案服一覧</p>
  <div>{this.renderSelectSloths(proposalData.p_pc_text)}</div>
  <p>{proposalData.p_pc_text}</p>

  ---------------------------------
  </div>
  ))
  )
  }*/

  renderSelectSloths(selectCloths) {
    /*const ary = selectCloths.split('_')
    ary.map(function(v) {
    return parseInt(v)
    })

    ary.map((cloths) => {
    return (
    <React.Fragment>
    <img src={cloths} />
    </React.Fragment>
    )
    })*/

  }
  /*
  componentWillMount() {
  const requestIdState = localStorage.getItem('requestId')
  }
  */
  render() {
    return (
      <div className="root">
        <GridList cellHeight={200} className="gridList">
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
          </GridListTile>

          {/* 所有服一覧表示 */}
          {this.state.proposalDatas.map((cloth) => {
            return (
              <GridListTile key={cloth.id} style={{width: '20%'}}>
                <img src={cloth.c_link} alt={`服画像id : ${cloth.c_u_id}`} />

              </GridListTile>
            )
          })}
        </GridList>
      </div>
    );
  }
}

/*
const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readProposals })

export default connect(mapStateToProps, mapDispatchToProps)(ProposalCard);
*/
export default ProposalCard;
