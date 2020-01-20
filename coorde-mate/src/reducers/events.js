import { GET_CLOTHS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case GET_CLOTHS:
      return action.response.data

    default:
      return events
  }
}
