import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import movies, { movieSaga } from "./movies";
import youtube, { youtubeSaga } from "./youtube";

const rootReducer = combineReducers({
	counter,
  movies,
  youtube,
});

export function* rootSaga(){
  yield all([
      fork(counterSaga),
      fork(movieSaga),
      fork(youtubeSaga),
  ])
}

export default rootReducer;
