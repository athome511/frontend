import _ from 'lodash';

import {
  READ_REQUESTS,
  READ_USER,
  READ_REQUEST_DETAILS,
  READ_CLOTHS
} from '../actions';


export default (events = {}, action) => {
  switch (action.type) {
    case READ_REQUESTS:
      return _.mapKeys(action.response.data, 'id')

    case READ_USER:
      return _.mapKeys(action.response.data, 'id')

    case READ_REQUEST_DETAILS:
      return action.response.data

    case READ_CLOTHS:
      return _.mapKeys(action.response.data, 'id')

    default:
      return events
  }
}
