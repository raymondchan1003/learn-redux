import {all} from "redux-saga/effects"; 
import imagesSaga from "./imagesSaga";
import statsSaga from "./statsSaga";

function* rootSaga(){
  yield all([
    imagesSaga(),
    statsSaga()
  ]);
}

export default rootSaga;

/*import { IMAGES } from "../constants";
import { takeEvery, take, put, call } from "redux-saga/effects"; //effects gt 2 types, one is blocking call like take(), one is non-blocking call like takeEvery()
//put is also for dispatch action

//'watcher saga' will listen to the actions, will invoke with the 'worker saga'

//watcher saga (Watcher Saga will wait for the action call 'HELLO' dispatch, then will execute workerSaga)
function* rootSaga() {
  
    //takeEvery() example (can use when add product to cart situation):
  //yield takeEvery("LOGIN", workerSaga); takeEvery() will handle all the dispatch with "LOGIN" action

  //take() example (can use when login situation, only will take one dispatch), will execute follow the sequence like login 1st only can logout :
  yield take("LOGIN");
  yield call(workerSaga);
  yield take("LOGOUT");
  yield call(logoutSaga);

  

  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

function* handleImagesLoad() {
  console.log("fetching images from unsplash");
}*/
