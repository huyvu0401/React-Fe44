import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((sanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{sanPhamGH.maSP}</td>
          <td>
            <img width="50" height="50" src={sanPhamGH.hinhAnh} alt=""></img>
          </td>
          <td>{sanPhamGH.tenSP}</td>
          <td>{sanPhamGH.soLuong}</td>
          <td>{sanPhamGH.gia}</td>
          <td>{sanPhamGH.soLuong * sanPhamGH.gia}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <table class="table">
          <thead>
            <th>Mã SP</th>
            <th>Hình ảnh</th>
            <th>Tên SP</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </thead>
          <tbody>
              {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    );
  }
}
