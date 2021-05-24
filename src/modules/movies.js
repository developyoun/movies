import { takeEvery, put, call, all } from "redux-saga/effects";
import axios from "axios"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const dir = 'movies';
const REQUEST_MOVIES = `${dir}/REQUEST_MOVIES`;

const SUCCESS_MOVIES = `${dir}/SUCCESS_MOVIES`;
const FAILURE_MOVIES = `${dir}/FAILURE_MOVIES`;

export const requestMovies = (keyword, requestUrl) => ({
  type: REQUEST_MOVIES,
  payload: {
    name: keyword,
    requestUrl,
  }
})

export const successMovies = (name, movies) => ({
  type: SUCCESS_MOVIES,
  payload: {
    name,
    movies
  },
})

export const failureMovies = error => ({
  type: FAILURE_MOVIES,
  payload: error,
})

const requestMovieAPI = (URL) => {
  return axios.get(URL, {
    params:{
      api_key: API_KEY,
      language:'ko-kr'
    }
  })
}

function* getMovieSaga(action){
  try{
    const {name, requestUrl} = action.payload
    const { data } = yield call(requestMovieAPI, requestUrl)
    yield put(successMovies(name, data.results))
  } catch(e){
    yield put(failureMovies(e))
  }
}

function* watchMovieSaga(){
  yield takeEvery(REQUEST_MOVIES, getMovieSaga)
}

export function* movieSaga(){
  yield all([
    watchMovieSaga()
  ]);
}

const initialState = {
  isRequest: false,
  data: {},
}

const movies = (state=initialState, action) => {
  
  switch(action.type){
    case REQUEST_MOVIES:
      return {
        ...state,
        isRequest: true,
      }
    case SUCCESS_MOVIES:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name] : action.payload.movies.filter(movie => movie.backdrop_path)
        },
        isRequest: false,
      }
    case FAILURE_MOVIES:
      return {
        ...state,
        data: action.payload,
        isRequest: false,
      }
    default:
      return state 
  }
}

export default movies;