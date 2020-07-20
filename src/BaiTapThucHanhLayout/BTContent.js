import React, { Component } from "react";
import BTCarousel from "./BTCarousel";
import BTProductList from "./BTProductList";

export default class BTContent extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-10">
            <BTCarousel/>
          </div>
          <div className="col-10">
            <BTProductList/>
          </div>
        </div>
      </div>
    );
  }
}
