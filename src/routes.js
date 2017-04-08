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
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ user: userData });
        });

        this.setSplashScreen();
    }

    setSplashScreen() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 1500);
    }

    navigatorRenderScene(route, navigator) {
        if(!navigator.props.isLoaded) {
            return (<SplashScreen navigator={navigator} />)
        }

        if (!navigator.props.user) {
            return (<LoginView navigator={navigator} />)
        }
        
        switch (route.name) {
            case 'LOGIN':
                return (<LoginView navigator={navigator} user={navigator.props.user} />)
            case 'DASHBOARD':
                return (<DashboardView navigator={navigator} user={navigator.props.user} />)
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'DASHBOARD' }}
                renderScene={this.navigatorRenderScene}
                {...this.state}
            /> 
        )
    }
}