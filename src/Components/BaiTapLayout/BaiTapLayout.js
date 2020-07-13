import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTSmartphone from './BTProduct'
import BTLaptop from './BTLaptop'
import BTPromotion from './BTPromotion'
import BTProductList from './BTProductList'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarousel/>
                <BTProductList/>
            </div>
        )
    }
}
