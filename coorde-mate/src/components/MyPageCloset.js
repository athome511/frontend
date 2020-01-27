import React from 'react';
import axios from 'axios';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import Loading from '../public/Loading';

class MyPageCloset extends React.Component {
  componentWillMount() {
    const userState = JSON.parse(localStorage.getItem('userData'))

    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })
    request.get(`/cloths/${userState.id}`)
    .then(res => {
      localStorage.setItem('clothsData', JSON.stringify(res.data))
    })

  }



  render() {
    const clothsState = JSON.parse(localStorage.getItem('clothsData'))



    return (
      <div className="root">
        <GridList cellHeight={200} className="gridList">
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
          </GridListTile>

          {/* 所有服一覧表示 */}
          
          {clothsState.c_link_data.map((cloth) => {
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

export default MyPageCloset;
