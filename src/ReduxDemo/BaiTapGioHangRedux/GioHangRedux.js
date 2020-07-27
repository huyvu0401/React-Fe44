import React, { Component } from 'react'
import {connect} from 'react-redux' //thu vien ket noi react component va redux store
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

class GioHangRedux extends Component {
    renderGioHang = () =>{
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
    }
    render() {
        return (
            <div>
               <h3>Gio hang</h3> 
               <table className="table">
                   <thead>
                       <tr>
                           <th>Product ID</th>
                           <th>Image</th>
                           <th>Product Name</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.renderGioHang()}
                   </tbody>
               </table>
            </div>
        )
    }
}
//hàm biến đổi state của redux thành props của component
const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.stateGioHang
    }
}
export default connect(mapStateToProps)(GioHangRedux)