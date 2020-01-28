import React from 'react';
import axios from 'axios';


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

  componentWillMount() {
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })
    console.log(this.props)

    request.get(`/cloths/${this.props.userId}`)
    .then(res => {
      this.setState({ datas: res.data })
    })
  }


  render() {
    while(this.props.userId === undefined) {
      return <Loading />
    }

    return (
      <React.Fragment>
        {console.log(this.props)}
        {this.state.datas.map((cloth) => {
          if(cloth.id) {
            return (
              <div className="root">
                <GridList cellHeight={200} className="gridList">
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
                  </GridListTile>

                  {/* 所有服一覧表示 */}
                  {cloth.c_link_data.map((cloth) => {
                    return (
                      <GridListTile key={cloth.id} style={{width: '20%'}}>
                        <img src={cloth.c_link} alt={`服画像id : ${cloth.id}`} />
                      </GridListTile>
                    )
                  })}
                </GridList>
              </div>
            )
          }
        })}

      </React.Fragment>
    )
  }
}
export default ClothsTile;
