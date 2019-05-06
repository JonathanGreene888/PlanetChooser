import { combineReducers } from 'redux';

import generatePictureReducer from './generatePicture.reducer';

export default () =>
    combineReducers({
        pictureData: generatePictureReducer,
    });
