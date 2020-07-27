import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
//rootReducer quan ly state cua toan ung dung
const rootReducer = combineReducers({
    //noi khoi bao cac state(reducer) theo tung nghiep vu
    //GioHangReducer chua stateGioHang
    GioHangReducer: BaiTapGioHangReducer
});
export default rootReducer;