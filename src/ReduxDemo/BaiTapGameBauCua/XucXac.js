import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    render() {
        return (

            <div style={{display:'flex', height:'100%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div className="mt-3">
                    <img style={{width:50}} src={this.props.xucXac[0].hinhAnh}></img>
                </div>
                <div className="mt-3">
                    <img style={{width:50}} src={this.props.xucXac[1].hinhAnh}></img>
                </div>
                <div className="mt-3">
                    <img style={{width:50}} src={this.props.xucXac[2].hinhAnh}></img>
                </div>
                <button style={{fontSize:25}} className="btn btn-success px-5 py-3 mt-5">Xốc</button>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        xucXac: state.BaiTapGameBauCuaReducer.xucXac
    }
}

export default connect(mapStateToProps)(XucXac)