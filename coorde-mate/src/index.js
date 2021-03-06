import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//myComponents
import Header from './public/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import SignIn from './components/SignIn';
import Completed from './components/Completed'
import TimeLine from './components/TimeLine';
import RequestDetails from './components/RequestDetails';
//import ClothsTile from './components/ClothsTile';
import SubmitRequest from './components/SubmitRequest';
import SubmitProposal from './components/SubmitProposal';
import SubmitBc from './components/SubmitBc';
import PastTimeLine from './components/PastTimeLine';
import Ranking from './components/Ranking';
import RequestHistory from './components/RequestHistory';
import ProposalHistory from './components/ProposalHistory';
import MyPageAccountStatus from './components/MyPageAccountStatus';
import MyPageAccountChange from './components/MyPageAccountChange';
import MyPageCloset from './components/MyPageCloset';


//myCss
import './css/default.css';
import './index.css';



const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {/* ログイン画面 */}
        <Route exact path={'/'} component={Login}/>
        <Route exact path={'/signIn'} component={SignIn}/>

        <Route path={'/timeLine'} component={TimeLine}/>

        {/* 依頼投稿画面 */}
        <Route path={'/requestSubmit'} component={SubmitRequest}/>

        {/* 依頼詳細画面 */}
        <Route path={'/request/:requestId'} component={RequestDetails}/>
        {/*<Route path={'/request/:requestId/cloths/:userId'} component={ClothsTile}/>*/}

        {/* 提案入力画面 */}
        <Route path={`/proposal/:requestId/submit`} component={SubmitProposal}/>


        <Route path={'/pastTimeLine'} component={PastTimeLine}/>

        {/* BC選択画面 */}
        <Route path={`/selectBc/:requestId/submit`} component={SubmitBc}/>

        <Route path={'/ranking'} component={Ranking}/>

        <Route path={'/userHistory/requests/:userId'} component={RequestHistory}/>
        <Route path={'/userHistory/proposals/:userId'} component={ProposalHistory}/>

        {/* マイページコンポーネント */}
        <Route path={'/myPage/accountStatus'} component={MyPageAccountStatus}/>
        <Route path={'/myPage/accountChange'} component={MyPageAccountChange}/>
        <Route path={'/myPage/closet'} component={MyPageCloset}/>



        {/* 入力完了画面 */}
        <Route path={`/completed`} component={Completed}/>


        <Route path={`/logout`} component={Logout}/>



      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
