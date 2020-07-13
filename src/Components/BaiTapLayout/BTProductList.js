import React, { Component } from "react";
import BTProduct from "./BTProduct";

export default class BTProductList extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
                <h3 className="text-center text-white">Best smart phone</h3>
                <div className="row">
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                    <div className="col-3">
                        <BTProduct />
                    </div>
                </div>
            </div>
    );
  }
}
