import _ from 'lodash';

import {
  READ_REQUESTS,
  READ_USER,
  READ_REQUEST_DETAILS,
  GET_CLOTHS
} from '../actions';


export default (events = {}, action) => {
  switch (action.type) {
    case READ_REQUESTS:
      return _.mapKeys(action.response.data, 'id')

    case READ_USER:
      return _.mapKeys(action.response.data, 'id')

    case READ_REQUEST_DETAILS:
      return action.response.data


    case GET_CLOTHS:
      return action.response.data

    default:
      return events
  }
}
