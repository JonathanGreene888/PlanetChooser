import { getType } from "typesafe-actions";

import { saveImage } from "../Actions/save.actions";
import { SaveImageSuccessfull } from "../Actions/actions.types";
import { PictureState } from "../../state";

const initialState: any = { savedImages: [] };

export default (state = initialState, action: SaveImageSuccessfull) => {
  switch (action.type) {
    case getType(saveImage): {
      return { ...state, savedImages: [...state.savedImages, action.payload] };
    }
    default: {
      return state;
    }
  }
};
