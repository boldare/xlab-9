import React, { Component } from 'react'
import TimerMixin from 'react-timer-mixin';
import * as firebase from 'firebase';
import { 
    Navigator, 
    View,
} from 'react-native'
import {
    LoginView,
    DashboardView,
    SplashScreen,
} from './layouts'
import { firebaseConfig } from './config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: null,
        }
    }
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
            if (userData) {
                this.navigator.push({
                    name: 'DASHBOARD',
                    user: userData,
                })
            } else {
                this.navigator.push({
                    name: 'LOGIN',
                })
            }
        })

    }

    navigatorRenderScene(route, navigator) {        
        switch (route.name) {
            case 'SPLASH':
                return (<SplashScreen navigator={navigator} />)
            case 'LOGIN':
                return (<LoginView navigator={navigator} />)
            case 'DASHBOARD':
                return (<DashboardView navigator={navigator} user={route.user} />)
        }
    }

    render() {
        return (
            <Navigator
                ref={(navigator) => { this.navigator = navigator }}
                initialRoute={{ name: 'SPLASH' }}
                renderScene={this.navigatorRenderScene}
                {...this.state}
            /> 
        )
    }
}