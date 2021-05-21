import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import axios from "axios"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const URL = process.env.REACT_APP_REQUEST_URL

const dir = 'movies';
const REQUEST_MOVIES = `${dir}/REQUEST_MOVIES`;
const SUCCESS_MOVIES = `${dir}/SUCCESS_MOVIES`;
const FAILURE_MOVIES = `${dir}/FAILURE_MOVIES`;

export const requestMovies = params => ({
  type: REQUEST_MOVIES,
  payload: params,
})

export const successMovies = movies => ({
  type: SUCCESS_MOVIES,
  payload: movies,
})

export const failureMovies = error => ({
  type: FAILURE_MOVIES,
  payload: error,
})

const requestMovieAPI = (pageNumber) => {
  console.log(pageNumber)
  return axios.get(URL, {
    params:{
      api_key: API_KEY,
      language:'ko-kr',
      page: pageNumber,
    }
  })
}

function* getMovieSaga(action){
  try{
    const { data } = yield call(requestMovieAPI, action.payload)
    yield put(successMovies(data.results))
  } catch(e){
    yield put(failureMovies(e))
  }
}

function* watchMovieSaga(){
  yield takeEvery(REQUEST_MOVIES, getMovieSaga)
}

export function* movieSaga(){
  yield all([fork(watchMovieSaga)]);
}

const initialState = {
  isLoading: false,
  data: []
}

const movies = (state=initialState, action) => {
  switch(action.type){
    case REQUEST_MOVIES:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_MOVIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FAILURE_MOVIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    default:
      return state 
  }
}

export default movies;