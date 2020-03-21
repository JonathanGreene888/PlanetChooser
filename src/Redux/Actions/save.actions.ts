import { createStandardAction } from "typesafe-actions";
import { SavedPicturesState } from "../../state";

export const saveImage = createStandardAction("SAVE_IMAGE").map(
  (payload: any) => {
    return {
      payload
    };
  }
);
