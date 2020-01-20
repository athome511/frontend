import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//css
import '../css/ranking.css';

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
    return (
      <TableContainer component={Paper}>
        <Table className="tableWidth" aria-label="simple table">

          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>icon</TableCell>
              <TableCell>ユーザネーム</TableCell>
              <TableCell>BC数</TableCell>
              <TableCell>BC</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.rankingDatas.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell><img src={row.u_icon} /></TableCell>
                <TableCell>{row.u_name}</TableCell>
                <TableCell>{row.u_month_bc}</TableCell>
                <TableCell>BC</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    );
  }
}

export default Ranking;
