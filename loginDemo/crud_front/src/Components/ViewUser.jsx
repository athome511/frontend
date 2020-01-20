import React from 'react'

class ViewUser extends React.Component {

  render() {
    return(
      <div>
	id:&nbsp;<span>{ this.props.data.id }</span>&nbsp;&nbsp;    
        name:&nbsp;<span>{ this.props.data.name }</span>&nbsp;&nbsp;
	icon:&nbsp;
	  <img src={ this.props.data.icon } alt="icon" />
      </div>
    )
  }
}

export default ViewUser
