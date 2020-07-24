import React, { Component } from "react";
import DSSP from "./DSSP";
import ModalGH from "./ModalGH";

export default class BTGH extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    gioHang: [],
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === maSP);
    if (index !== -1) {
      if (tangGiam) gioHangCapNhat[index].soLuong++;
      else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong--;
        } else this.xoaGioHang(gioHangCapNhat[index]);
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  xoaGioHang = (chosenProduct) => {
    let spGioHang = {
      maSP: chosenProduct.maSP,
      hinhAnh: chosenProduct.hinhAnh,
      tenSP: chosenProduct.tenSP,
      soLuong: 1,
      gia: chosenProduct.giaBan,
    };

    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    //cap nhat gio hang bang phuong thuc setState
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  themGioHang = (chosenProduct) => {
    //định nghĩa hàm thay đổi state tại nơi chứa state
    let spGioHang = {
      maSP: chosenProduct.maSP,
      hinhAnh: chosenProduct.hinhAnh,
      tenSP: chosenProduct.tenSP,
      soLuong: 1,
      gia: chosenProduct.giaBan,
    };
    let gioHangCapNhat = [...this.state.gioHang];

    //ktra sp co trong gio hang hay chua
    let index = gioHangCapNhat.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    //cap nhat gio hang bang phuong thuc setState
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  render() {
    return (
      <div className="container">
        <ModalGH
          tinhTongTien={this.tinhTongTien}
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
        <DSSP prodList={this.arrProduct} themGioHang={this.themGioHang} />
      </div>
    );
  }
}
