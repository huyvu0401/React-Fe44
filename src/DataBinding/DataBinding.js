import React, { Component } from "react";
import cssDataBinding from './DataBinding.module.css'

export default class DataBinding extends Component {
  //thuộc tính
  name = "fe44";
  img = "https://picsum.photos/300/300";
  //phương thức
  renderImg = () => {
      let obStyle = {fontWeight:'bold'}
    return (
      <div className="card text-left w-25">
          <h1 style={obStyle} className={`${cssDataBinding.title} display-4`}>This is a picture</h1>
        <img className="card-img-top" src={this.img} alt="123" />
      </div>
    );
  };
  render() {
    //binding biến
    let title = "FE44";
    let imgSrc = "https://picsum.photos/200/200";
    //binding hàm
    let renderText = () => {
      //trả về chuỗi hoặc số hoặc đoạn html react(jsx)
      return (
        <div>
          <h1>Hello 123</h1>
        </div>
      );
    };
    return (
      <div>
        {this.renderImg()}
        <h1 id="title">{title}</h1>
        <img src={imgSrc} alt="123"></img>
        {renderText()}
        <p>Name: {this.name}</p>
      </div>
    );
  }
}
