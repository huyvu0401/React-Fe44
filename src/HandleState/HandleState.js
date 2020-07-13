import React, { Component } from 'react'

export default class HandleState extends Component {
    //state: thuộc tính có sẵn của class component cho phép thay đổi giá trị và render lại giao diện
    //state sẽ chứa những giá trị thay đổi được
    state = {
        isLogin: false
    }

    //tạo ra 2 thuộc tính
    //nếu Islogin = true => hello huy
    // nếu Islogin = false => nút đăng nhập
    // isLogin = false;
    userName = 'huy';
    renderContent= () => {
        if(this.state.isLogin){
            return <h1>
                Hello {this.userName}
            </h1>
        }
        return <button onClick={() => {
            this.login();
        }}>Đăng nhập</button>
    }
    //định nghĩa phương thức xử lý sự kiện log in
    login = () => {
        // this.setState({
        //     isLogin: true
        // })
        //this.setState là phương thức có sẵn của component nhận vào state mới thay cho giá trị state cũ và tự động gọi lại hàm render
        //setState là phương thức bất đồng bộ
        // const newState = {
        //     isLogin: true
        // }
        this.setState({
            isLogin: true
        }, ()=>{
            //tham số thứ hai của hàm setstate là một callback chạy khi state thay đổi
            console.log(this.state.isLogin);
        });
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
