import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from 'material-ui/TextField';


//import ButtonComponent from '../public/ButtonComponent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


import { postProposal } from '../actions';

import Loading from '../public/Loading';

//css
import '../css/submitProposal.css';

//提案入力画面
class SubmitProposal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
      flag: 0
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return(
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
        />
    )
  }


  async onSubmit(values) {
    await this.props.postProposal(values)
    this.props.history.push('/completed')
  }




  render() {
    //フォームCSS
    const { handleSubmit, pristine, submitting } = this.props
    const style = { margin: 15}
    const form = {
      width: '80%',
      margin: 'auto',
      alignItems: 'center'
    }
    const submit = {
      textAlign: 'center'
    }
    const input = {
      marginTop: 50
    }
    //ここまでフォームCSS


    const userState = JSON.parse(localStorage.getItem('userData'))
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
      <React.Fragment>
        <div className="root">
          <GridList cellHeight={200} className="gridList">
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div" className="listSubheader" style={{fontSize: '2rem'}}>所有服一覧</ListSubheader>
            </GridListTile>

            {/* 所有服一覧表示 */}
            {this.state.datas.map((cloth) => {
              return (
                <React.Fragment>
                  <GridListTile key={cloth.id} style={{width: 'auto', height: 150, background: '#E1E8ED', padding: 5, borderRadius: 3, marginLeft: 10,marginBottom: 10}}>
                    <img src={cloth.c_link} alt={`服画像id : ${cloth.id}`} />
                  </GridListTile>

                  <p>{cloth.id}</p>
                </React.Fragment>
              )
            })}
          </GridList>
        </div>


        <form onSubmit={handleSubmit(this.onSubmit)} style={form}>

          <div style={input}><Field label="画像を選んで区切り文字で入力" name="p_pc_text" type="text" component={this.renderField} /></div>

          <div style={input}><Field label="メモを入力" name="p_memo" type="String" component={this.renderField} /></div>

          <div style={input}><Field label={`ユーザIDを入力 : ${userState.id}`} name="p_u_id" type="String" component={this.renderField} /></div>

          <div style={input}><Field label={`依頼IDを入力 : ${requestState.id}`} name="p_r_id" type="String" component={this.renderField} /></div>


          <div className="submitRequestButton" style={submit}>
            <RaisedButton label="提案を決定する" type="submit" style={style} disabled={pristine || submitting} />

            <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
          </div>
        </form>


      </React.Fragment>

    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.p_pc_text) errors.p_pc_text = "画像を選んで区切り文字で入力してください"
  if (!values.p_u_id) errors.p_u_id = "ユーザIDを入力してください"
  if (!values.p_r_id) errors.p_r_id = "依頼IDを入力してください"

  return errors
}

const mapDispatchToProps = ({ postProposal })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'requestNewForm' })(SubmitProposal)
)

//export default SubmitProposal;
