import { IMAGES } from "../constants";
import { takeEvery, select, call, put } from "redux-saga/effects"; //select is to get the state
import { fetchImages } from "../api";
import { setImages, setError } from "../actions";

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

const getPage = (state) => state.nextPage;

export default watchImagesLoad;
