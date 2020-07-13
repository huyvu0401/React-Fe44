import React, { Component } from "react";

export default class BaiTapHandleState extends Component {
  state = {
    imgLink: "../img/red-car.jpg",
  };
  changeColor = (newImgLink) => {
    this.setState({
      imgLink: newImgLink,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <p style={{ fontWeight: "bold" }}>
              Please choose your favorite car's color
            </p>
            <img className="w-100" src={this.state.imgLink} alt="red-car" />
          </div>
          <div className="col-6">
            <p style={{ fontWeight: "bold" }}>Change Color</p>
            <div className="row">
              <div className="col-3">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.changeColor("../img/red-car.jpg");
                  }}
                >
                  Red Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px solid #EEE" }}
                  className="btn btn-outline-default"
                  onClick={() => {
                    this.changeColor("../img/silver-car.jpg");
                  }}
                >
                  Silver Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px solid gray" }}
                  className="btn"
                  onClick={() => {
                    this.changeColor("../img/steel-car.jpg");
                  }}
                >
                  Steel Car
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    this.changeColor("../img/black-car.jpg");
                  }}
                >
                  Black Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
