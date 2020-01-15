import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


//import Loading from '../public/Loading';
//css
import '../css/clothsTile.css';


// 提案者の選んだ服一覧
class ClothsTile extends React.Component {

  render() {
    //if(!Number.isInteger(this.props.userId))  return <Loading />


    return (
      <div className="root">
      <GridList cellHeight={200} className="gridList">

        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>提案者の服一覧</ListSubheader>
        </GridListTile>

        {this.state.datas.map((tile) => {
          return (
            <GridListTile key={tile.c_link} style={{width: '20%'}}>
              <img src={tile.c_link} alt={`服画像id : ${tile.c_u_id}`} />
            </GridListTile>
          )
        })}

      </GridList>
    </div>
    )
  }
}

export default ClothsTile;
