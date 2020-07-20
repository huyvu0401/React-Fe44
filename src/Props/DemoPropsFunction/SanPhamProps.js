import React, { Component } from "react";

export default class SanPhamProps extends Component {
  render() {
    let {product, showDetailProp} = this.props;
    return (
      <div>
        <div className="card text-center">
          <img
            height="300"
            className="card-img-top"
            src={product.hinhAnh}
            alt=""
          ></img>
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                showDetailProp(product);
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}
