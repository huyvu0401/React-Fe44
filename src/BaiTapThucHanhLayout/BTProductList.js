import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4 py-2">
            <BTProductItem />
          </div>
          <div className="col-4 py-2">
            <BTProductItem />
          </div>
          <div className="col-4 py-2">
            <BTProductItem />
          </div>
          <div className="col-4 py-2">
            <BTProductItem />
          </div>
          <div className="col-4 py-2">
            <BTProductItem />
          </div>
          <div className="col-4 py-2">
            <BTProductItem />
          </div>
        </div>
      </div>
    );
  }
}
