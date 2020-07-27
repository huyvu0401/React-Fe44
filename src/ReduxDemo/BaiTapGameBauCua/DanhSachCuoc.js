import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachCuoc extends Component {
    renderDanhSachCuoc = () => {
        return this.props.danhSachCuoc.map((quanCuoc, index)=>{
            return <div className="col-4 text-center mt-5" key={index}>
            <img style={{width:200}} src={quanCuoc.hinhAnh} alt=""></img>
            <br></br>
            <br></br>
            <span className="p-2 pl-5 pr-5 mt-5 bg-warning" style={{borderRadius:'5%', fontSize:25}}>Cược: <span className="text-success">{quanCuoc.diemCuoc}</span></span>
        </div>
        })
    }
    render() {
        return (
            <div className="row text-left">
               {this.renderDanhSachCuoc()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        danhSachCuoc: state.BaiTapGameBauCuaReducer.danhSachCuoc
    }
}
export default connect(mapStateToProps)(DanhSachCuoc)