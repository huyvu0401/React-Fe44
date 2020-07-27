import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './Components/DemoComponent/Demo';
import DemoClass from './Components/DemoComponent/DemoClass';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import BaiTapHandleState from './HandleState/BaiTapHandleState';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DemoPropsFunction from './Props/DemoPropsFunction/DemoPropsFunction';
import BTGH from './Props/BaiTapGioHang/BTGH';
import BaiTapGioHangRedux from './ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGameBauCua from './ReduxDemo/BaiTapGameBauCua/BaiTapGameBauCua';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <EventBinding/> */}
      {/* <HandleState/> */}
      {/* <BaiTapHandleState/> */}
      {/* <BaiTapThucHanhLayout/> */}
      {/* <DemoPropsFunction/> */}
      {/* <BTGH/> */}
      {/* <BaiTapGioHangRedux/> */}
      <BaiTapGameBauCua/>
      
    </div>
  );
}

export default App;
