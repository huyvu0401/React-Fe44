import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = () => {
        alert("hello fe44")
    }
    showMsg = (message) => {
        alert(`hello ${message}`)
    }
    render() {
        return (
            <div>
                Cách 1
                {/* Cách 1: truyền trực tiếp callback function - ít sử dụng*/}
                <button onClick={this.handleClick}>Click me!!</button>
                {/* Không có 2 dấu () sau function, nếu có thì code sẽ chạy trước khi bấm vào nút */}
                <button onClick={this.showMsg.bind(this,'haha')}>Click me!!</button>
                <br/>
                Cách 2
                {/* Cách 2: truyền func gián tiếp */}
                <button onClick={() => {
                    this.handleClick()   
                }
                }>Click me!!</button>
                <button onClick={() => {
                    this.showMsg("hihi")
                }}>Click me</button>
                {/* Ưu tiên dùng cách 2 */}
            </div>
        )
    }
}
