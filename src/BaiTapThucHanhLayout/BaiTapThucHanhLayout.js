import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSideBar from './BTSideBar'
import BTContent from './BTContent'
import BTCarousel from './BTCarousel'
import BTProductList from './BTProductList'
import BTFooter from './BTFooter'
import BTBody from './BTBody'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTBody/>
                <BTFooter/>
            </div>
        )
    }
}
