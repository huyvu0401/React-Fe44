import React, { Component } from "react";
import SP from "./SP";

export default class DSSP extends Component {
renderSanPham = () => {
    let { prodList } = this.props;
    return prodList.map((sanPham, index) => {
        return  <div className="col-4" key={index}>
            <SP themGioHang = {this.props.themGioHang} product={sanPham}/>
      </div>
    })
}
  render() {
    return (
      <div>
        <div className="text-center"><h1>Danh sách SP</h1></div>
        <div className="row">
            {this.renderSanPham()}
        </div>
      </div>
    );
  }
}
