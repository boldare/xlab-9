import React, { Component } from 'react'
import { Navigator } from 'react-native'

import {
    LoginView,
} from './layouts'

export default class Navigation extends Component {
    navigatorRenderScene(route, navigator) {
        switch (route.name) {
            case 'LOGIN':
                return (<LoginView navigator={navigator} />)
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'LOGIN' }}
                renderScene={this.navigatorRenderScene}
            />
        )
    }
}