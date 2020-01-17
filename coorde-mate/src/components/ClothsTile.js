import React from 'react';
import { connect } from 'react-redux';

import { getCloths } from '../actions';

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
      datas: []
    };
  }

  componentDidMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    //request.get(`/cloths/${this.props.userId}`)
    request.get(`/cloths/1`)
    .then(res => {
      this.setState({
        datas: res.data
      });
    })
  }
*/

  componentDidMount() {
    this.props.getCloths()
  }





  render() {
    if(!Number.isInteger(this.props.userId))  return <Loading />
    const userId = this.props.userId

    return (
      <div className="root">
      <GridList cellHeight={200} className="gridList">

        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
        </GridListTile>
        {console.log("▼")}
        {console.log(this.props.events)}

        {this.props.events.map((tile) => {
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

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ getCloths })

export default connect(mapStateToProps, mapDispatchToProps)(
    ClothsTile
);
