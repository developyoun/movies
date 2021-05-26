import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { dbService } from "../../Firebase";

const dir = "createBoard";

const REQUEST = `${dir}/REQUEST_BOARDS`;
const SUCCESS = `${dir}/SUCCESS_BOARDS`;
const FAILURE = `${dir}/FAILURE_BOARDS`;

export const requestCreateBoard = contents => ({
  type: REQUEST,
  payload: contents,
})
export const successCreateBoard = data => ({
  type: SUCCESS,
  payload: data,
});
export const failureCreateBoard = error => ({
  type: FAILURE,
  payload: error,
})

function* asyncCreateBoard(action){
  try{
    yield dbService.collection("movieApp").add(action.payload);
    const { docs } = yield dbService.collection("movieApp").get()
    yield put(successCreateBoard(docs.map(doc => doc.data())))
  }
  catch(error){
    put(failureCreateBoard(error))
  }
}

export function* createBoardSaga(){
  yield all([
    takeLatest(REQUEST, asyncCreateBoard)
    
  ])
}

const initialState = {
  isLoading: false,
  data: []
}

const createBoard = (state=initialState, action) => {
  switch(action.type){
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      }
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    default:
      return state
  }
};

export default createBoard;