import { all } from 'redux-saga/effects';

import GeneratePicture from './generatePicture.saga';

// Add new sagas here
export default function* RootSaga() {
    yield all([GeneratePicture()]);
}
