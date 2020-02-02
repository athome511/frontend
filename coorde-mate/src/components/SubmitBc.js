import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

//import Loading from '../public/Loading';


class SubmitBc extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      proposalDatas:[]
    }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
  }


  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/proposals/${this.props.match.params.requestId}`)
    .then(res => {
      this.setState({ proposalDatas: res.data })
    })

  }

  handleClickSubmit(e) {
    console.log(e.currentTarget.name)
    const rootURL = 'http://18.178.35.28:3001'
    axios.get(`${rootURL}/choose_bc/${e.currentTarget.name}`)
    this.props.history.push('/completed')


  }


  render() {
    const button = {
      backgroundColor: '#F44336',
      color: 'white',
      height:40,
      fontSize: '2.0rem',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    }

    return (
      <React.Fragment>
        {this.state.proposalDatas.map((cloth) => {
          if(cloth.id) {
            return (
              <React.Fragment>
              <div className="root">
                <GridList cellHeight={200} className="gridList">
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
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

                </GridList>
              </div>
              <Button
                style={{backgroundColor: '#F44336', color: 'white',height:40,
                fontSize: '2.0rem',
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
              marginLeft: '30%'}}
                onClick = {(e) => this.handleClickSubmit(e)}
                name = {cloth.id}
                variant = "contained"
                className = 'selectBC'
                >
                この提案をBCにする
              </Button>
            </React.Fragment>

            )
          }
        })}

      </React.Fragment>
    );
  }
}

export default SubmitBc;
