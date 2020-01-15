//index.jsではアプリケーション内に存在する全てのreducerを統括する
//そのためimportすべきなのが combineReducers

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export default combineReducers({ form })

// export default combineReducers({ count, foo, bax })
//複数のreducerをやるのが普通や
