const stateDefault = {
  stateGioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      hinhAnh: "./img/vsphone.jpg",
      gia: 1000,
      soLuong: 1,
    },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );

      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGH);
      }
      state.stateGioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }
      //gan lai gia tri moi cho stateGioHang (tuong tu set state)
      state.stateGioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) gioHangCapNhat[index].soLuong++;
        else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong--;
          } else gioHangCapNhat.splice(index, 1)
        }
      }
      state.stateGioHang = gioHangCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapGioHangReducer;
