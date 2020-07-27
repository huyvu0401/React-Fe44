const stateDefault = {
    danhSachCuoc: [
        {ma: 'cua', hinhAnh: '/img/cua.png', diemCuoc:0},
        {ma: 'nai', hinhAnh: '/img/nai.png', diemCuoc:0},
        {ma: 'ga', hinhAnh: '/img/ga.png', diemCuoc:0},
        {ma: 'tom', hinhAnh: '/img/tom.png', diemCuoc:0},
        {ma: 'ca', hinhAnh: '/img/ca.png', diemCuoc:0},
        {ma: 'bau', hinhAnh: '/img/bau.png', diemCuoc:0},
    ],
    diemThuong: 500,
    xucXac:[
        {ma:'cua', hinhAnh:'./img/cua.png'},
        {ma:'nai', hinhAnh:'./img/nai.png'},
        {ma:'ga', hinhAnh:'./img/ga.png'}
    ]
}

const BaiTapGameBauCuaReducer = (state=stateDefault, action) => {
    return {...state}
}

export default BaiTapGameBauCuaReducer