import { RootState } from '../../state';

import { generatePlanet } from '../../Redux/Actions/generate.actions';

export const mapStateToProps = (state: RootState) => ({
    picture: state || 'Picture not available',
});

export const mapDispatchToProps = {
    generatePlanet,
};
