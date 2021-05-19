import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import movies, { movieSaga } from "./movies";
import { all, fork } from "redux-saga/effects";

const rootReducer = combineReducers({
	counter,
  movies
});

export function* rootSaga(){
  yield all([
      fork(counterSaga),
      fork(movieSaga),
  ])
}

export default rootReducer;
