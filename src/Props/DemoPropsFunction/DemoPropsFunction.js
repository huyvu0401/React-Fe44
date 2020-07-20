import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

export default class DemoPropsFunction extends Component {
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
      detailedProd:  {
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
      }
  }
  renderSanPham = () => {
    return this.arrProduct.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
            <SanPhamProps showDetailProp={this.showDetail} product = {sanPham}/>
        </div>
      );
    });
  };
  showDetail = (chosenProd) => {
      //setState
    this.setState({
        detailedProd:chosenProd
    })
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Product List</h3>
        <div class="row">{this.renderSanPham()}</div>

        <div className="row mt-5">
          <div className="col-4">
            <h3>Iphone</h3>
            <img src={this.state.detailedProd.hinhAnh} style={{ width: "100%" }}></img>
          </div>
          <div className="col-8">
              <h3>Specs</h3>
              <table className="table">
                  <tbody>
                      <tr>
                          <td>Screen</td>
                          <td>{this.state.detailedProd.manHinh}</td>
                      </tr>
                      <tr>
                          <td>OS</td>
                          <td>{this.state.detailedProd.heDieuHanh}</td>
                      </tr>
                      <tr>
                          <td>Front Camera</td>
                          <td>{this.state.detailedProd.cameraTruoc}</td>
                      </tr>
                      <tr>
                          <td>Back Camera</td>
                          <td>{this.state.detailedProd.cameraSau}</td>
                      </tr>
                      <tr>
                          <td>RAM</td>
                          <td>{this.state.detailedProd.ram}</td>
                      </tr>
                      <tr>
                          <td>ROM</td>
                          <td>{this.state.detailedProd.rom}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}
