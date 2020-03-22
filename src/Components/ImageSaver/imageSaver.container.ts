import { RootState } from "../../state";

import { saveImage } from "../../Redux/Actions/save.actions";

export const mapStateToProps = (state: RootState) => ({
  pictureUrl: state.pictureData.url || "",
  savedImages: state.savedImages
});

export const mapDispatchToProps = {
  saveImage
};
