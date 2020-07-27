import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={product.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(product);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
//ham tao ra prop la mot ham
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      let spGH = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        gia: sanPhamClick.giaBan,
        soLuong: 1,
        hinhAnh: sanPhamClick.hinhAnh,
      };
      let action = {
        type: "THEM_GIO_HANG", //thuoc tinh bat buoc phai co
        spGH: spGH,
      };
      //dung ham dispatch gui gia tri len reducer de set lai
      dispatch(action);
      // console.log(spGH)
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
