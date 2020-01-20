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
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>

        <div><Field label="依頼タイトル" name="r_title" type="String" component={this.renderField} /></div>

        <div><Field label="依頼メモ" name="r_memo" type="text" component={this.renderField} /></div>

        <div><Field label="依頼期限" name="r_limit" type="datetime" component={this.renderField} /></div>


        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting} />

        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/"  />} />

      </form>

    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.r_title) errors.r_title = "Entar a 1title, Please."
  if (!values.r_memo) errors.r_memo = "Entar a 2title, Please."
  if (!values.r_limit) errors.r_limit = "Entar a 3title, Please."

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'requestNewForm' })(SubmitRequest)
)
