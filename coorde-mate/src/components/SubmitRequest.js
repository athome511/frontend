import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';


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
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    console.log(values)
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="依頼タイトル" name="r_title" type="String" component={this.renderField} /></div>

        <div><Field label="依頼メモ" name="r_memo" type="text" component={this.renderField} /></div>

        <div><Field label="依頼期限" name="r_limit" type="datetime" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/" >Cancel</Link>
        </div>
      </form>

    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Entar a title, Please."
  if (!values.body) errors.body = "Entar a title, Please."

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'requestNewForm' })(SubmitRequest)
)
