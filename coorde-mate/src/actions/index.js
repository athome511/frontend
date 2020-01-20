import axios from 'axios';


//オリジナル
export const READ_REQUESTS = 'READ_REQUESTS';

//以下二つは他でも使うため宣言
export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

//自分で定義
export const GET_CLOTHS = 'GET_CLOTHS';


const ROOT_URL = 'http://18.178.35.28:3001/';

//外部APIにリクエストを投げる
export const readRequests = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/requests`)
  dispatch({ type: READ_REQUESTS, response })
}









export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`)
  dispatch({ type: READ_EVENTS, response })
}

//所有服一覧
export const getCloths = userId => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/cloths/${userId}`)
  dispatch({ type: GET_CLOTHS, response })
}


//投稿ページ
//依頼情報登録？
export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/requests`, values)
  dispatch({ type: CREATE_EVENT, response })
}






export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}`, values)
  dispatch({ type: UPDATE_EVENT, response})
}

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}`)
  dispatch({ type: READ_EVENT, response})
}

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}`)
  dispatch({ type: DELETE_EVENT, id })
}
