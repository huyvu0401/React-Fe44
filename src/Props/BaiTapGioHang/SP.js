import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let {product} = this.props;
    return (
      <div>
          <div className="card text-left">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan}</p>
            <button className="btn btn-success" onClick={() => {
                this.props.themGioHang(product);
            }}>Them vao gio</button>
          </div>
        </div>
      </div>
    );
  }
}
