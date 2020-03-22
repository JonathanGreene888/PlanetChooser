import { put, takeEvery, call } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import axios from "axios";

import { chooseRandomDate } from "../../utils";

import {
  generatePicture,
  fetchPictureSuccessful
} from "../Actions/generate.actions";

function fetchNewPicture() {
  const randomDate = chooseRandomDate();
  return axios.get(
    `https://api.nasa.gov/planetary/apod?date=${randomDate}&api_key=tB7sce2zsRulhQG0U7jtQvLlh0TjLWKFZMnEvsNz`
  );
}

function* returnPicture() {
  try {
    const result = yield call(fetchNewPicture);
    yield put(fetchPictureSuccessful(result.data));
  } catch {
    const result = yield call(fetchNewPicture);
    yield put(fetchPictureSuccessful(result.data));
  }
}

function* fetchPictureSaga() {
  yield takeEvery(getType(generatePicture), returnPicture);
}

export default fetchPictureSaga;
