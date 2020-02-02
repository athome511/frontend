import React from 'react';
import axios from 'axios';

//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

//css
import '../css/requestCard.css';

class RequestCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userDatas:[]
    }
  }



  componentWillMount(){
    const request = axios.create({
      baseURL: 'http://18.178.35.28:3001'
    })

    if(this.props.userId !== undefined) {
      request.get(`/users/${this.props.userId}`)
      .then(res => {
        this.setState({
          userDatas: res.data
        });
      })
    }
  }


  render() {
    const root = { flexGrow: 1 }
    const paper = {
      padding: 10,
      margin: 'auto',
      marginTop: 4,
      marginBottom: 4,
      width: '100%',
      border: 'solid 1px #ff9800',
      boxShadow: this.props.shadowStyle,
    }
    const image = {
      width: 128,
      height: 128
    }
    const img = {
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '50%',
      border: 'solid 2px #FF9800'
    }
    const memo = {
      fontSize: '1.8rem'
    }

    return (
      <div style={root} className="card">
      <Paper style={paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase style={image}>
              <img style={img} alt="user_icon" src={this.state.userDatas.u_icon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography gutterBottom variant="body2">
                {this.props.title}
              </Typography>
                <Typography variant="subtitle1" gutterBottom style={memo}>
                  {this.props.memo}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {this.props.limit}
                </Typography>
              </Grid>
            </Grid>
            {
              (() => {
                if (this.props.bcSelected === false) {
                  return (
                    <Grid item>
                      <Typography variant="subtitle1" className="accent bold">
                      BCを選択してください
                    </Typography>
                    </Grid>
                  )
                }
              })()
            }
          </Grid>
        </Grid>
      </Paper>
    </div>
    );
  }
}

export default RequestCard;
