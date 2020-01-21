import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';

import { readCloths } from '../actions';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


import Loading from '../public/Loading';
//css
import '../css/clothsTile.css';


// ユーザの所有服一覧
class ClothsTile extends React.Component {
  /*constructor(){
    super();
    this.state = {
      datas: [],
      userDatas: []
    };
  }*/
/*
  componentDidMout() {
    console.log("componentDid")
    this.props.readCloths(this.props.userId)
  }
*/

  render() {
    if(!Number.isInteger(this.props.userId))  return <Loading />

    return (
      <div className="root">
      <GridList cellHeight={200} className="gridList">

        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
        </GridListTile>

        {/* 所有服一覧表示
        {this.renderCloths()}
        {console.log("できてる？")}
*/}
        {/*
        {this.state.userDatas.map((tile) => {
          return (
            <GridListTile key={tile.c_link} style={{width: '20%'}}>
              <img src={tile.c_link} alt={`服画像id : ${tile.c_u_id}`} />
            </GridListTile>
          )
        })}
        */}

        {/*this.setUser(this.props.userId)*/}

      </GridList>
    </div>
    )
  }
}

/*
const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readCloths });

export default connect(mapStateToProps, mapDispatchToProps)(
    ClothsTile
);

*/
export default ClothsTile;
