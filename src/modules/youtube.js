import { put, all, fork, call, takeEvery } from "redux-saga/effects"
import axios from "axios";

const VIDEO_URL = process.env.REACT_APP_REQUEST_VIDEO_URL;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const dir = 'youtube';

const REQUEST_YOUTUBE = `${dir}/REQUEST_YOUTUBE`;
const SUCCESS_YOUTUBE = `${dir}/SUCCESS_YOUTUBE`;
const FAILURE_YOUTUBE = `${dir}/FAILURE_YOUTUBE`;

export const requestYoutube = params => ({
  type:REQUEST_YOUTUBE,
  payload: params,
});
export const successYoutube = video => ({
  type:SUCCESS_YOUTUBE,
  payload: video
});
export const failureYoutube = error => ({
  type: FAILURE_YOUTUBE,
  payload: error
});

const youtubeApi = videoId => {
  return axios.get(`${VIDEO_URL}/${videoId}/videos`, {
    params:{
      api_key: API_KEY,
    }
  })
}

function* getYoutubeUrl(action){
  try{
    const { data } = yield call(youtubeApi, action.payload);
    yield put(successYoutube(data.results))
  } catch(e){
    yield put(failureYoutube(e))
  }
}

function* watchYoutube(){
  yield takeEvery(REQUEST_YOUTUBE, getYoutubeUrl);
};

export function* youtubeSaga(){
  yield all([fork(watchYoutube)]);
};

const initialState = {
  isLoading: false,
  data: []
};

const youtube = (state=initialState, action) => {
  switch(action.type){
    case REQUEST_YOUTUBE:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_YOUTUBE:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case FAILURE_YOUTUBE:
      return {
        ...state,
        isLoading: false,
        date: action.payload
      };
    default:
      return state;
  };
};
export default youtube;