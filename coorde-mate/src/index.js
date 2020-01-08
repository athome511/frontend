import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';


//myComponents
import Header from './public/Header';
import TimeLine from './components/TimeLine';

//myCss
import './css/default.css';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Header />
      <Route exact path={'/'} component={TimeLine}/>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
