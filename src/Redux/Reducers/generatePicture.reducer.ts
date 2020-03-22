import { getType } from "typesafe-actions";

import { fetchPictureSuccessful } from "../Actions/generate.actions";
import { GenerateAction } from "../Actions/actions.types";
import { PictureState } from "../../state";

const initialState: PictureState = {};

export default (state = initialState, action: GenerateAction) => {
  switch (action.type) {
    case getType(fetchPictureSuccessful): {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
