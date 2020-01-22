import React from 'react';
//import axios from 'axios';
/*import _ from 'lodash';
import { connect } from 'react-redux';

import { readCloths } from '../actions';
*/
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


import Loading from '../public/Loading';
//css
import '../css/clothsTile.css';


// ユーザの所有服一覧
class ClothsTile extends React.Component {
  componentDidMount() {
    //this.props.readCloths(this.props.userId)
    //this.props.readCloths(1)
  }

  /*
  renderCloths() {
  const clothsState = JSON.parse(localStorage.getItem('clothsData'))
  if(clothsState) {
  clothsState.map((clothData) => {
  return (
  <React.Fragment>
  {console.log(clothData.c_link)}
  <GridListTile key={clothData.id} style={{width: '20%'}}>
  <img src={clothData.c_link} alt={`服画像id : ${clothData.c_u_id}`} />
  </GridListTile>
  </React.Fragment>
  )
  })
  }
  */

  renderCloths() {
    const clothsState = JSON.parse(localStorage.getItem('clothsData'))
    clothsState.c_link_data.map((clothData) => {
      return (
        <GridListTile key={clothData.id} style={{width: '20%'}}>
        <img src={clothData.c_link} alt={`服画像id : ${clothData.c_u_id}`} />
        </GridListTile>
      )
    })
    return (
      <div>
        <img src={clothsState[0].c_link} alt="hoge" />
        {console.log(clothsState)}
      </div>
    )
  }

  /*
  renderCloths() {
  const clothsState = JSON.parse(localStorage.getItem('rclothsData'))
  return (
  _.map(clothsState, clothData => (
  <GridListTile key={clothData.c_link} style={{width: '20%'}}>
  <img src={clothData.c_link} alt={`服画像id : ${clothData.c_u_id}`} />
  </GridListTile>
  ))
  )
  }
  */
  render() {
    if(!Number.isInteger(1000))  return <Loading />

    //if (this.props.events == null) return <Loading />
    //if (this.props.userId === undefined) return <Loading />

    return (
      <div className="root">
        {/*<GridList key={this.props.events.c_u_id} cellHeight={200} className="gridList">*/}
        <GridList cellHeight={200} className="gridList">


          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
          </GridListTile>

          {/* 所有服一覧表示 */}
          {this.renderCloths()}
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
  ClothsTile);
  */

  export default ClothsTile;
