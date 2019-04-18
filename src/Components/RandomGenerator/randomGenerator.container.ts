import { RootState } from '../../state';

import { generatePlanet } from '../../Redux/Actions/generate.actions';

export const mapStateToProps = (state: RootState) => ({
    newPlanet: state,
});

export const mapDispatchToProps = {
    generatePlanet,
};
