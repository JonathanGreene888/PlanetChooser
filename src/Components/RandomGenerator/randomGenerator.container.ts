import { RootState } from '../../state';

import { generatePlanet } from '../../Redux/Actions/generate.actions';

export const mapStateToProps = (state: RootState) => ({
    planet: state || '',
});

export const mapDispatchToProps = {
    generatePlanet,
};
