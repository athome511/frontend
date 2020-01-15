import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';


//myComponents
import Header from './public/Header';
import TimeLine from './components/TimeLine';
import RequestDetails from './components/RequestDetails';
import RequestSubmit from './components/RequestSubmit';
import PastTimeLine from './component/PastTimeLine';

//myCss
import './css/default.css';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Header />
      <Route exact path={'/'} component={TimeLine}/>
      <Route path={'/request/:requestId'} component={RequestDetails}/>
      <Route path={'/request/:requestId/submit'} component={RequestSubmit}/>

      <Route path={'/pastTimeLine'} component={PastTimeLine}/>

      {/*<Route exact path={'/ranking'} component={Ranking}/>
      <Route path={'/userHistory/:userId'} component={UserHistory}/>*/}

    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
