import React from 'react';
import axios from 'axios';
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
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }
/*
  componentWillMount() {
    const requestState = JSON.parse(localStorage.getItem('requestData'))

    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001/'
    })
    request.get(`/cloths/${requestState.r_u_id}`)
    .then(res => {
      this.setState({
        datas: res.data.c_link_data
      });
    })
  }*/
/*
  renderCloths() {
    const clothsState = JSON.parse(localStorage.getItem('clothsData'))
    clothsState.c_link_data.map((clothData) => {
      return (
        <GridListTile key={clothData.id} style={{width: '20%'}}>
          <img src={clothData.c_link} alt={`服画像id : ${clothData.c_u_id}`} />
        </GridListTile>
      )
    })
  }*/

  render() {
    const requestState = JSON.parse(localStorage.getItem('requestData'))
    const clothsState = JSON.parse(localStorage.getItem('clothsData'))
    //if(!Number.isInteger(1000))  return <Loading />
    if(clothsState.c_u_id !== requestState.r_u_id) return <Loading />
      const request = axios.create({
        baseURL: 'http://18.178.35.28:3001/'
      })
      request.get(`/cloths/${requestState.r_u_id}`)
      .then(res => {
        this.setState({
          datas: res.data.c_link_data
        });
      })
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
          {this.state.datas.map((cloth) => {
            return (
              <GridListTile key={cloth.id} style={{width: '20%'}}>
                <img src={cloth.c_link} alt={`服画像id : ${cloth.c_u_id}`} />
              </GridListTile>
            )
          })}
          {/*this.renderCloths()*/}

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
