import axios from "axios";
import { all, fork, call, put, takeLatest } from "redux-saga/effects";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const URL = process.env.REACT_APP_TMDB_SEARCH_URL;
const dir = 'search';

const REQUEST_SEARCH = `${dir}/REQUEST_SEARCH`;
const SUCCESS_SEARCH = `${dir}/SUCCESS_SEARCH`;
const FAILURE_SEARCH = `${dir}/FAILURE_SEARCH`;

export const requestSearch = inputValue => ({
  type: REQUEST_SEARCH,
  payload: inputValue,
});
export const successSearch = result => ({
  type: SUCCESS_SEARCH,
  payload: result,
})
export const failureSearch = error => ({
  type: FAILURE_SEARCH,
  payload: error,
})

const requestSearchApi = (inputValue) => {
  return axios.get(URL, {
    params:{
      api_key:API_KEY,
      query: inputValue,
      language:"ko-kr"
    }
  })
}

function* requestSearchSaga(action){
  try{
    const { data } = yield call(requestSearchApi, action.payload);
    yield put(successSearch(data.results))
  } catch(e){
    yield put(failureSearch(e))
  }
}

function* watchSearchSaga(){
  yield takeLatest(REQUEST_SEARCH, requestSearchSaga)
}

export function* searchSaga(){
  yield all([
    fork(watchSearchSaga),
  ])
}

const initialState = {
  searchInput: "",
  isLoading: false,
  error: null,
  data:[],
}

const search = (state=initialState, action) => {
  switch(action.type){
    case REQUEST_SEARCH:
      return {
        ...state,
        isLoading: true,
        error: null,
        searchInput: action.payload,
      };
    case SUCCESS_SEARCH:
      return {
        ...state,
        isLoading: false,
        error:null,
        data: action.payload.filter(movie => movie.backdrop_path)
      };
    case FAILURE_SEARCH:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: [],
      }
    default: 
      return state
  }
}
export default search