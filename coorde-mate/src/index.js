import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';

//Context
import BaseURLContext from './contexts/BaseURL';


//myComponents
import Header from './public/Header';
import TimeLine from './components/TimeLine';
import RequestDetails from './components/RequestDetails';
import PastTimeLine from './components/PastTimeLine';

//myCss
import './css/default.css';
import './index.css';

function App() {
  const baseURL = "http://18.178.35.28:3001/"


  return (
    <BaseURLContext.provider value={baseURL}>
      <MuiThemeProvider>
        <BrowserRouter>
          <Header />
          <Route exact path={'/'} component={TimeLine}/>
          <Route path={'/request/:requestId'} component={RequestDetails}/>

          <Route path={'/pastTimeLine/:requestId'} component={PastTimeLine}/>
        </BrowserRouter>
      </MuiThemeProvider>
    </BaseURLContext.provider>
  )
}

/*ReactDOM.render(<App />,document.getElementById('root')
);
*/
