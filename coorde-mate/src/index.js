import React from 'react';
import ReactDOM from 'react-dom';

//myComponents
import Header from './public/Header';
import TimeLine from './components/TimeLine';

//myCss
import './css/default.css';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <TimeLine />
  </React.Fragment>,
  document.getElementById('root')
);
