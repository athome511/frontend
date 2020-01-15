import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';


import ButtonComponent from '../public/ButtonComponent';

//import { postEvent } from '../action';
//css
import '../css/submitRequest.css';

//依頼投稿ページ
class SubmitRequest extends React.Component {

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return(
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  render() {
    return (
      <form>
        <div><Field label="LabelTitle" name="title" type="text" component={this.renderField} /></div>

        <div><Field label="BodyTitle" name="body" type="text" component={this.renderField} /></div>

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
export default connect(null, null)(
  reduxForm({ validate, form: 'requestNewForm' })(SubmitRequest)
)
