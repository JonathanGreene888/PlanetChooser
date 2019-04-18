import { connect } from 'react-redux';

import RandomGenerator from './randomGenerator.component';
import { mapStateToProps, mapDispatchToProps } from './randomGenerator.container';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomGenerator);
