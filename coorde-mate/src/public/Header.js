import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header className="container">
        <Link to='/'>Library</Link>
      </header>
    );
  }
}


export default Header;
