import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


//import ButtonComponent from '../public/ButtonComponent';
import { postEvent } from '../actions';

//css
import '../css/submitRequest.css';

//依頼投稿ページ
class SubmitRequest extends React.Component {
  constructor(props) {
    super(props)
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
    await this.props.postEvent(values)
    this.props.history.push('/completed')
  }

  render() {
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


    const userState = JSON.parse(localStorage.getItem('userData'))

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} style={form}>

        <div style={input}><Field label={`ユーザID: ${userState.id}`} name="r_u_id" type="String" component={this.renderField} /></div>

        <div style={input}><Field label="依頼タイトル" name="r_title" type="String" component={this.renderField} /></div>

        <div style={input}><Field label="依頼メモ" name="r_memo" type="text" component={this.renderField} /></div>

        <div style={input}><Field label="依頼期限" name="r_limit" type="datetime" component={this.renderField} /></div>

        <div className="submitRequestButton" style={submit}>
          <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting} />

        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
        </div>
      </form>

    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.r_title) errors.r_title = "タイトルを１～１４文字で入力してください"
  if (!values.r_memo) errors.r_memo = "メモは１４０文字までにしてください"
  if (!values.r_limit) errors.r_limit = "期限を入力してください"

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'requestNewForm' })(SubmitRequest)
)
