import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
// import counter, { counterSaga } from "./counter";
import movies, { movieSaga } from "./movies";
import youtube, { youtubeSaga } from "./youtube";
import search, { searchSaga } from "./search";
import board, { boardSaga } from "./board";

const rootReducer = combineReducers({
	// counter,
	movies,
	youtube,
	search,
  board,
});

export function* rootSaga() {
	yield all([
		// fork(counterSaga),
		movieSaga(),
		youtubeSaga(),
		searchSaga(),
    boardSaga(),
	]);
}

export default rootReducer;
