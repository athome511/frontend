import _ from 'lodash';

import {
  READ_REQUESTS,
  READ_USER_REQUESTS,
  READ_USER,
  READ_REQUEST_DETAILS,
  READ_PAST_REQUEST,
  READ_CLOTHS,
  READ_PROPOSALS,
  READ_USER_PROPOSALS
} from '../actions';


export default (events = {}, action) => {
  switch (action.type) {
    case READ_REQUESTS:
      return _.mapKeys(action.response.data, 'id')

    case READ_USER_REQUESTS:
      return _.mapKeys(action.response.data, 'id')

    case READ_USER:
      return _.mapKeys(action.response.data, 'id')

    case READ_CLOTHS:
      return _.mapKeys(action.response.data, 'id')

    case READ_REQUEST_DETAILS:
      return action.response.data

    case READ_PAST_REQUEST:
      return _.mapKeys(action.response.data, 'id')

    case READ_PROPOSALS:
      return _.mapKeys(action.response.data, 'id')

    case READ_USER_PROPOSALS:
      return _.mapKeys(action.response.data, 'id')

    default:
      return events
  }
}
