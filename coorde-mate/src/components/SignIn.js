import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { signInEvent } from '../actions';

class SignIn extends React.Component {
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
    await this.props.signInEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    const style = { margin: 12 }

    return (
      <div>
        <h1>新規登録</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>

          <div><Field label="ニックネーム" name="u_name" type="String" component={this.renderField} /></div>

          <div><Field label="メールアドレス" name="u_mail" type="text" component={this.renderField} /></div>

          <div><Field label="パスワード" name="u_password" type="password" component={this.renderField} /></div>


          <RaisedButton label="次へ" type="submit" style={style} disabled={pristine || submitting} />

          <RaisedButton label="Cancel" style={style} containerElement={<Link to="/"  />} />

        </form>
      </div>

    );
  }
}


const validate = values => {
  const errors = {}

  if (!values.u_name) errors.u_name = "ニックネームを入力してください"
  if (!values.u_mail) errors.u_mail = "メールアドレスを入力してください"
  if (!values.u_password) errors.u_password = "パスワードを入力してください"

  return errors
}

const mapDispatchToProps = ({ signInEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'signInForm' })(SignIn)
)
