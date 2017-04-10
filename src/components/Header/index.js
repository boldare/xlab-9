import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { styles } from './styles'

export class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleShowProfile() {
        this.props.navigator.push({
            name: 'DASHBOARD',
            user: this.props.user
        })
    }

    handleLogOut() {
        firebase.auth().signOut()
        this.props.navigator.immediatelyResetRouteStack([{ name: 'LOGIN' }])
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { this.handleShowProfile() }}>
                    <Image
                        source={{'uri': this.props.user.photoURL}}
                        style={styles.userImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.logoutButton}>
                    <TouchableOpacity onPress={() => { this.handleLogOut() }}>
                        <Text style={styles.headerText}>
                            Wyloguj
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}