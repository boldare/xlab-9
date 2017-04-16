import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    View,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleShowProfile() {
        /*
            ZADANIE NR.2 - Routing
            TODO :: Powrót do wyboru nicku
        */
    }

    handleLogOut() {
        firebase.auth().signOut()
        /*
            ZADANIE NR.2 - Routing
            TODO :: wylogowanie
        */
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={[styles.headerColumn, styles.headerColumnFirst]}>
                    {
                        /*
                            ZADANIE NR.2 - Routing
                            TODO :: Strzałka w tył - 'ios-arrow-back', tylko dla IOS'a
                        */
                    }
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
                    <TouchableOpacity onPress={() => { this.handleLogOut() }}>
                        <Icon name="ios-walk-outline" size={32} color="#635D5C" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}