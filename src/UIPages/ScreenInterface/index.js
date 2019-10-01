import React from "react";

import Flexi from "../../UIComponents/Flexi";
import hoc from "../../UIHocs/ScreenHoc";

class ScreenInterFace extends React.Component {
  render() {
    const { config,handleFieldChange,handleOnSubmit} = this.props;
console.log(this.props.config,"paths");
    return <Flexi items={this.props.config} handleFieldChange={handleFieldChange} handleOnSubmit={handleOnSubmit}  />;
  }
}
export default hoc()(ScreenInterFace);
