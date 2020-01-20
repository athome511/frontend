import {
  READ_TIMELINE,
  GET_CLOTHS
} from '../actions';


export default (state = {}, action) => {
  switch (action.type) {
    case READ_TIMELINE:
      return state


    case GET_CLOTHS:
      return action.response.data

    default:
      return state
  }
}
