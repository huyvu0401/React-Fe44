import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer';
//rootReducer quan ly state cua toan ung dung
const rootReducer = combineReducers({
    //noi khoi bao cac state(reducer) theo tung nghiep vu
    //GioHangReducer chua stateGioHang
    GioHangReducer: BaiTapGioHangReducer,
    BaiTapGameBauCuaReducer
});
export default rootReducer;