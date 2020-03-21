import { RootState } from "../../state";

import { saveImage } from "../../Redux/Actions/save.actions";

export const mapStateToProps = (state: any) => ({
  pictureUrl: state.pictureData.url || "",
  savedImages: state.savedPictures
});

export const mapDispatchToProps = {
  saveImage
};
