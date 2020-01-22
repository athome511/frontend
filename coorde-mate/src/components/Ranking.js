import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
//css
import '../css/ranking.css';



const styles = {
  root: {
      fontSize: '2rem',
    },
};

//ランキング画面
class Ranking extends React.Component {
  constructor(){
    super();
    this.state = {
      rankingDatas:[]
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    request.get(`/ranking`)
    .then(res => {
      this.setState({
        rankingDatas: res.data
      });
    })
  }


  render() {
    const { classes } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className="tableWidth" aria-label="simple table" classes={{ root: classes.root }} >

          <TableHead>
            <TableRow>
              <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>Rank</TableCell>
              <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>icon</TableCell>
              <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>ユーザネーム</TableCell>
              <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>BC数</TableCell>
              <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>BC</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.rankingDatas.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" style={{fontSize:'2.0rem', textAlign:'center'}}>{row.rank}
                </TableCell>
                <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}><img src={row.u_icon} /></TableCell>
                <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>{row.u_name}</TableCell>
                <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>{row.u_month_bc}</TableCell>
                <TableCell style={{fontSize:'2.0rem', textAlign:'center'}}>BC</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    );
  }
}
export default withStyles(styles)(Ranking);
//export default Ranking;
