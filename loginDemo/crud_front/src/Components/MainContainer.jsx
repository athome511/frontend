import React from 'react'
import UsersContainer from './UsersContainer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import FormContainer from './FormContainer'
import update from 'react-addons-update'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  createUser = (name,icon) => {
    axios.post('http://18.178.35.28:3002/users',{name: name, icon: icon} )
    .then((response) => {
      const newData = update(this.state.users, {$push:[response.data]})
      this.setState({users: newData})
    })
    .catch((data) =>{
      console.log(data)
    })
  }


  componentDidMount() {
    axios.get('http://18.178.35.28:3002/users')
    .then((results) => {
      console.log(results)
      this.setState({users: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
      <div className='app-main'>
	 <FormContainer createUser={ this.createUser } />
	 <UsersContainer userData={ this.state.users } />
      </div>
    );
  }
}

export default MainContainer
