import { connect } from "react-redux";

import ImageSaver from "./imageSaver.component";
import { mapStateToProps, mapDispatchToProps } from "./imageSaver.container";

export default connect(mapStateToProps, mapDispatchToProps)(ImageSaver);
