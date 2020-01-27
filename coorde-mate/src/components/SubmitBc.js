import React from 'react';
import axios from 'axios';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import Loading from '../public/Loading';


class SubmitBc extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[],
      flag: 0
    };
  }


  render() {
    const requestState = JSON.parse(localStorage.getItem('requestData'))
    const clothsState = JSON.parse(localStorage.getItem('clothsData'))
    //if(!Number.isInteger(1000))  return <Loading />
    if(clothsState.c_u_id !== requestState.r_u_id) return <Loading />


    if(this.state.flag === 0) {
      const request = axios.create({
        baseURL: 'http://18.178.35.28:3001/'
      })
      request.get(`/cloths/${requestState.r_u_id}`)
      .then(res => {
        this.setState({
          datas: res.data.c_link_data,
          flag: 1
        });
      })
    }

    return (
      <div className="root">
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
        </GridList>
      </div>
    );
  }
}

export default SubmitBc;
