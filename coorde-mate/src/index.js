import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';


//myComponents
import Header from './public/Header';
import Completed from './components/Completed'
import TimeLine from './components/TimeLine';
import RequestDetails from './components/RequestDetails';
import SubmitRequest from './components/SubmitRequest';
import SubmitProposal from './components/SubmitProposal';
import PastTimeLine from './components/PastTimeLine';
import Ranking from './components/Ranking';
import UserHistory from './components/UserHistory';
import MyPage from './components/MyPage';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
//myCss
import './css/default.css';
import './index.css';



const store = createStore(reducer)


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Route exact path={'/'} component={TimeLine}/>

      {/* 依頼投稿画面 */}
      <Route path={'/request/submit'} component={SubmitRequest}/>

      {/* 依頼詳細画面 */}
      <Route path={'/request/:requestId'} component={RequestDetails}/>

      {/* 提案入力画面 */}
      <Route path={`/proposal/:requestId/submit`} component={SubmitProposal}/>


      <Route path={'/pastTimeLine'} component={PastTimeLine}/>

      <Route path={'/ranking'} component={Ranking}/>

      <Route path={'/userHistory/:userId'} component={UserHistory}/>

      <Route path={'/myPage'} component={MyPage}/>



      {/* 入力完了画面 */}
      <Route path={`/completed`} component={Completed}/>


    </BrowserRouter>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
