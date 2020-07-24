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
    }
    default:
      return { ...state, stateGioHang: gioHangCapNhat };
  }
};
export default BaiTapGioHangReducer;
