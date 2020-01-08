import React from 'react';
import ReactDOM from 'react-dom';

//myComponents
import Header from './public/Header';
import TimeLine from './components/TimeLine';
import RequestDetails from './components/RequestDetails';

//myCss
import './css/default.css';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <TimeLine />
    <RequestDetails />
  </React.Fragment>,
  document.getElementById('root')
);
