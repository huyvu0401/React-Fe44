import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './Components/DemoComponent/Demo';
import DemoClass from './Components/DemoComponent/DemoClass';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import BaiTapHandleState from './HandleState/BaiTapHandleState';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <EventBinding/> */}
      {/* <HandleState/> */}
      <BaiTapHandleState/>
      
    </div>
  );
}

export default App;
