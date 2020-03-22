import { RootState } from "../../state";

import { generatePicture } from "../../Redux/Actions/generate.actions";

export const mapStateToProps = (state: RootState) => ({
  picture: state.pictureData
});

export const mapDispatchToProps = {
  generatePicture
};
