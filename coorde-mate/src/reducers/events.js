import _ from 'lodash';

import {
  READ_REQUESTS,
  GET_CLOTHS
} from '../actions';


export default (events = {}, action) => {
  switch (action.type) {
    case READ_REQUESTS:
      return _.mapKeys(action.response.data, 'id')


    case GET_CLOTHS:
      return action.response.data

    default:
      return events
  }
}
