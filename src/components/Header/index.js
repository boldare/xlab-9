import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleShowProfile() {
        this.props.navigator.push({
            name: 'DASHBOARD',
            user: this.props.user,
            direction: 'LEFT',
        })
    }

    handleLogOut() {
        firebase.auth().signOut()
        this.props.navigator.immediatelyResetRouteStack([{ name: 'LOGIN' }])
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={[styles.headerColumn, styles.headerColumnFirst]}>
                    <TouchableOpacity onPress={() => { this.handleShowProfile() }}>
                        <Icon name="ios-arrow-back" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerColumn}>
                    <TouchableOpacity onPress={() => { this.handleShowProfile() }}>
                        <Image
                            source={{'uri': this.props.user.photoURL, cache: 'only-if-cached'}}
                            style={styles.userImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.headerColumn, styles.headerColumnLast]}>
                    <TouchableOpacity onPress={() => { this.handleShowProfile() }}>
                        <Icon name="ios-walk-outline" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}