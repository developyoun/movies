import { all, call, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { dbService } from "../Firebase";

// 1. 액션 타입 정의
let id = 0;
const dir = "boards";
const APP_NAME = "movieApp";

const REQUEST_CREATE = `${dir}/REQUEST_CREATE`;
const SUCCESS_CREATE = `${dir}/SUCCESS_CREATE`;
const FAILURE_CREATE = `${dir}/FAILURE_CREATE`;

const REQUEST_READ = `${dir}/REQUEST_READ`;
const SUCCESS_READ = `${dir}/SUCCESS_READ`;
const FAILURE_READ = `${dir}/FAILURE_READ`;

const REQUEST_UPDATE = `${dir}/REQUEST_UPDATE`;
const SUCCESS_UPDATE = `${dir}/SUCCESS_UPDATE`;
const FAILURE_UPDATE = `${dir}/FAILURE_UPDATE`;

const REQUEST_DELETE = `${dir}/REQUEST_DELETE`;
const SUCCESS_DELETE = `${dir}/SUCCESS_DELETE`;
const FAILURE_DELETE = `${dir}/FAILURE_DELETE`;

// 2. 액션 함수 정의
export const requestCreate = (content) => ({ type: REQUEST_CREATE, payload: content });
export const successCreate = (data) => ({ type: SUCCESS_CREATE, payload: data });
export const failureCreate = () => ({ type: FAILURE_CREATE });

export const requestRead = () => ({ type: REQUEST_READ });
export const successRead = (data) => ({ type: SUCCESS_READ, payload: data });
export const failureRead = () => ({ type: FAILURE_READ });

export const requestUpdate = (content) => ({ type: REQUEST_UPDATE, payload: content});
export const successUpdate = (data) => ({ type: SUCCESS_UPDATE, payload: data });
export const failureUpdate = () => ({ type: FAILURE_UPDATE });

export const requestDelete = (target) => ({ type: REQUEST_DELETE, payload: target });
export const successDelete = (data) => ({ type: SUCCESS_DELETE, payload: data });
export const failureDelete = () => ({ type: FAILURE_DELETE });

// 3. 사가 함수
const getBoardList = (appName) => { return dbService.collection(appName).get() };

function* createSaga(action) {
  try{
    yield dbService.collection(APP_NAME).add(action.payload);
    yield put(requestRead())
  } catch(error){
    yield put(failureCreate(error))
  }
}
function* updateSaga(action) {
  try{
    const { target, content } = action.payload;
    yield dbService.collection(APP_NAME).doc(target).update({...content});
    yield put(requestRead())
  } catch(error){
    yield put(failureUpdate(error))
  }
}
function* deleteSaga(action){
  try{
    yield dbService.collection(APP_NAME).doc(action.payload).delete();
    yield put(requestRead())
  } catch(error){
    yield put(failureUpdate(error))
  }
}
function* readSaga() {
  try{
    const { docs } = yield call(getBoardList, APP_NAME);
    yield put(successRead(docs.map((doc) => ({
			...doc.data(), 
			id:doc.id
		}))));
  } catch(error){
    yield put(failureRead(error))
  }
}

export function* boardSaga() {
	yield all([
    takeLatest(REQUEST_CREATE, createSaga), 
    takeLatest(REQUEST_UPDATE, updateSaga), 
    takeLatest(REQUEST_DELETE, deleteSaga), 
    takeLatest(REQUEST_READ, readSaga),
  ]);
}

const initialState = {
	isLoading: false,
	error: null,
	data: [],
};
const board = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_CREATE:
		case REQUEST_UPDATE:
		case REQUEST_DELETE:
		case REQUEST_READ:
			return {
				...state,
				isLoading: true,
			};
		case SUCCESS_CREATE:
		case SUCCESS_UPDATE:
		case SUCCESS_DELETE:
		case SUCCESS_READ:
			return {
				...state,
				isLoading: false,
				data: [...action.payload],
			};
		case FAILURE_CREATE:
		case FAILURE_UPDATE:
		case FAILURE_DELETE:
		case FAILURE_READ:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default board;
