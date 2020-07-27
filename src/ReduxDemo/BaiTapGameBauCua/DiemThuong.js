import React, { Component } from "react";
import {connect} from 'react-redux'
import rootReducer from "../../Redux/reducers/rootReducer";

class DiemThuong extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <span style={{fontSize:25,borderRadius:'12px',border:'5px solid #000' }} className="display-4 p-2">
          Tiền thưởng: <span className="text-success">{this.props.diemThuong}</span>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{//state la rootReducer
    return {
        diemThuong: state.BaiTapGameBauCuaReducer.diemThuong,
    }
}

export default connect(mapStateToProps)(DiemThuong)