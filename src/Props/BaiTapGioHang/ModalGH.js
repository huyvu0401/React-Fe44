import React, { Component } from "react";

export default class ModalGH extends Component {
  tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien,spGH,index) =>{
      return tongTien+=spGH.soLuong * spGH.gia;
    }, 0)
  }
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
          <td>
            <button className="btn btn-primary mx-2" onClick={() => {
            this.props.tangGiamSoLuong(sanPhamGH.maSP,true)
          }}>+</button>
          {sanPhamGH.soLuong}
          <button className="btn btn-primary mx-2" onClick={() => {
            this.props.tangGiamSoLuong(sanPhamGH.maSP,false)
          }}>-</button>
            </td>
          <td>{sanPhamGH.gia}</td>
          <td>{sanPhamGH.soLuong * sanPhamGH.gia}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(sanPhamGH);
              }}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <h3>Giỏ hàng</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Hình ảnh</th>
                <th>Tên SP</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>{this.renderGioHang()}</tbody>
            <tfoot>
              <td colspan="5"></td>
              <td>Tong tien</td>
              <td>{this.tinhTongTien().toLocaleString()}</td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
