import { combineReducers } from "redux";

import generatePictureReducer from "./generatePicture.reducer";
import savedPicturesReducer from "./savedPictures.reducer";

export default () =>
  combineReducers({
    pictureData: generatePictureReducer,
    savedImages: savedPicturesReducer
  });
