import { getType } from "typesafe-actions";

import { saveImage } from "../Actions/save.actions";
import { SaveImageSuccessfull } from "../Actions/actions.types";
import { SavedPicturesState } from "../../state";

const initialState: SavedPicturesState = { savedImages: [] };

export default (state = initialState, action: SaveImageSuccessfull) => {
  switch (action.type) {
    case getType(saveImage): {
      return {
        ...state,
        savedImages: [...state.savedImages, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};
