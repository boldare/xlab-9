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

export class ChatHeader extends Component {
    constructor(props) {
        super(props)
    }

    goBack() {
        this.props.navigator.jumpBack()
    }

    handleLogOut() {
        firebase.auth().signOut()
        this.props.navigator.immediatelyResetRouteStack([{ name: 'LOGIN' }])
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={[styles.headerColumn, styles.headerColumnFirst]}>
                    <TouchableOpacity onPress={() => { this.goBack() }}>
                        <View style={styles.goBack}>
                            <Icon name="ios-arrow-back" size={20} color="#fff" />
                            <Text style={styles.label}>
                                Pokoje
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerColumn}>
                    <Text style={styles.title}>{this.props.room.name}</Text>
                </View>
            </View>
        )
    }
}