import { createStandardAction } from "typesafe-actions";

export const saveImage = createStandardAction("SAVE_IMAGE").map(
  (payload: string) => {
    return {
      payload
    };
  }
);
