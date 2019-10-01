import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScreenInterFace from '../../UIPages/ScreenInterface';
class MainRoute extends React.Component {

  render() {
    return (
      <div >
        <Router>
          <Route exact path={"/screen-interface/:path"} component={ScreenInterFace} />
        </Router>
      </div>
    );
  }
}

export default MainRoute;
