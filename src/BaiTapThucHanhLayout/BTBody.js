import React, { Component } from "react";
import BTSideBar from "./BTSideBar";
import BTContent from "./BTContent";

export default class BTBody extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <BTSideBar/>
          </div>
          <div className="col-9">
            <BTContent/>
          </div>
        </div>
      </div>
    );
  }
}
