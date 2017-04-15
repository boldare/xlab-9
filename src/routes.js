import React, { Component } from 'react'
import * as firebase from 'firebase'
import { 
    Navigator, 
    View,
    BackAndroid,
} from 'react-native'
import {
    SplashScreen,
    LoginView,
    DashboardView,
    RoomView,
    ChatView,
} from './layouts'
import { firebaseConfig } from './config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: null,
        }

        BackAndroid.addEventListener('hardwareBackPress', () => {
            const currentRoutes = this.navigator.getCurrentRoutes()
            if (currentRoutes.length > 2 && currentRoutes.slice(-1).name !== 'DASHBOARD') {
                this.navigator.pop()
                return true
            }
            return false
        })
    }
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
            if (userData) {
                this.navigator.push({
                    name: 'DASHBOARD',
                    user: userData,
                })
            } else {
                if (this.navigator.getCurrentRoutes()[0].name === 'SPLASH') {
                    this.navigator.push({
                        name: 'LOGIN',
                    })
                }
            }
        })
    }

    navigatorConfigScene(route, routeStack) {
        switch (route.direction) {
            case 'LEFT':
                return Navigator.SceneConfigs.FloatFromLeft
            default:
                return Navigator.SceneConfigs.PushFromRight
        }
    }

    navigatorRenderScene(route, navigator) {        
        switch (route.name) {
            case 'SPLASH':
                return (<SplashScreen navigator={navigator} />)
            case 'LOGIN':
                return (<LoginView navigator={navigator} />)
            case 'DASHBOARD':
                return (<DashboardView navigator={navigator} user={route.user} />)
            case 'ROOM':
                return (<RoomView navigator={navigator} user={route.user} />)
            case 'CHAT':
                return (<ChatView navigator={navigator} {...route.passProps} />)
        }
    }

    render() {
        return (
            <Navigator
                ref={(navigator) => { this.navigator = navigator }}
                initialRoute={{ name: 'SPLASH' }}
                renderScene={this.navigatorRenderScene}
                configureScene={this.navigatorConfigScene}
                {...this.state}
            /> 
        )
    }
}