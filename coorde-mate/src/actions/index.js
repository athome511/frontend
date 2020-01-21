import axios from 'axios';


//オリジナル
export const SIGN_IN = 'SIGN_IN';
export const READ_REQUESTS = 'READ_REQUESTS';
export const READ_USER = 'READ_USER';
export const READ_REQUEST_DETAILS = 'READ_REQUEST_DETAILS';
export const READ_CLOTHS = 'READ_CLOTHS';


//以下二つは他でも使うため宣言
export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';



const ROOT_URL = 'http://18.178.35.28:3001/';

//新規登録
export const signInEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/users`, values)
  dispatch({ type: SIGN_IN, response })
}

//外部APIにリクエストを投げる
export const readRequests = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/requests`)
  dispatch({ type: READ_REQUESTS, response })
}

//ユーザデータ取得
export const readUser = (userId) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/users/${userId}`)
  dispatch({ type: READ_USER, response})
}

//依頼詳細取得
export const readRequestDetails = (requestId) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/requests/${requestId}`)
  dispatch({ type: READ_REQUEST_DETAILS, response })
}







export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`)
  dispatch({ type: READ_EVENTS, response })
}

//所有服一覧
export const readCloths = userId => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/cloths/${userId}`)
  dispatch({ type: READ_CLOTHS, response })
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
